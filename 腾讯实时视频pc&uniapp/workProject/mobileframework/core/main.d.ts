// 详见：https://cn.vuejs.org/v2/api/#选项-生命周期钩子
interface Life {
    beforeCreate?:   Function | undefined,
    created?:        Function | undefined,
    beforeMount?:    Function | undefined,
    mounted?:        Function | undefined,
    beforeUpdate?:   Function | undefined,
    updated?:        Function | undefined,
    activated?:      Function | undefined,
    deactivated?:    Function | undefined,
    beforeDestroy?:  Function | undefined,
    destroyed?:      Function | undefined,
    errorCaptured?:  Function | undefined,
}
interface Event {}
interface Methods {
    (name:string, ...arg:any[]): any
}