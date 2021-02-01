export default function(event, life, watch, methodsSource) {
	let E, L, W
	let component = this
	let methods = (name, ...param) => {
		let func = methodsSource[name] || methodsSource.prototype[name] // 目标函数，methodsSource可能是字面量对象，也可以是类
		if (!func) throw new Error('找不到 methods：' + name)
		return func.apply(this, param)
	}
	let eventContext
	component.methods = methods
	eventContext = component

	E = changeEventContext.call(this, event, eventContext)
	L = changeEventContext.call(this, life, eventContext)
	W = changeEventContext.call(this, watch, eventContext)
	// 修改event内的上下文，event内只能调用methods
	for (let key in E) {
		E[key] = function() {
			let result = event[key].apply({
				methods: component.methods
			}, arguments)
			return result
		}
	}
	// 修改life内的上下文，life内只能调用methods
	for (let key in L) {
		L[key] = function() {
			let result = life[key].apply({
				methods: component.methods
			}, arguments)
			return result
		}
	}

	return {
		E,
		L,
		W
	}
}

function changeEventContext(event, eventContext) {
	let newEvent = {}
	event && Object.keys(event).forEach(key => {
		newEvent[key] = function() {
			let targetEvent
			if (typeof event[key] === 'function') {
				targetEvent = event[key]
			} else if (event[key].handler) {
				targetEvent = event[key].handler
			}
			return targetEvent.apply(eventContext, arguments)
		}
	})
	return newEvent
}
