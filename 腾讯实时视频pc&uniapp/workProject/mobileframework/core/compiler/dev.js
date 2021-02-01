const gulp = require('gulp')
const PATH = require('path')
rootPath = PATH.resolve('../src/')
const utils = require('./business-utils.js')
let watch = gulp.watch(rootPath)
utils.delDir()
utils.moveAllFile('dev')
watch.on('change', function (path, state) {
    if (checkPathIsNeedWatch(path)) return
    if (rootPath) {
        path = PATH.resolve(path)
    }
    console.log('文件修改:' + path)
    if (/event.js$/.test(path)) return
    if (/methods.js$/.test(path)) return
    if (/model.js$/.test(path)) return
    if (/.vue$/.test(path)) {
        utils.moveVueFile(path)
        return
    }
    utils.moveOtherFile(path)
})


watch.on('unlink', function (path) {
    if (checkPathIsNeedWatch(path)) return
    clearTimeout(changeTimeout)
    changeTimeout = setTimeout(function () {
        if (rootPath) {
            path = PATH.resolve(path)
        }
        console.log('文件删除:' + path)
        try {
            fs.unlinkSync(path.replace(/^src/, 'src'))
        } catch (e) { }
        utils.moveAllFile('dev')
    }, 100)
})

watch.on('add', function (path) {
    if (checkPathIsNeedWatch(path)) return
    console.log('文件添加:' + path)
    let content = fs.readFileSync(path).toString()
    if (!content) {
        let fileName = path.match(/[^\\\/]+$/)[0]
        switch (fileName) {
            case 'model.js':
                fs.writeFileSync(path, `export let props = []
export let model = {}
export let computed = {}
`)
                break
            case 'event.js':
                fs.writeFileSync(path, `export let life = {}
export let event = {}
export let watch = {}
`)
                break
            case 'index.vue':
                fs.writeFileSync(path, `<template>
  <view></view>
</template>
<style scoped lang="scss">

</style>`)
                break
            case 'methods.js':
                fs.writeFileSync(path, `export default class {}`)
                break
        }
    }
    clearTimeout(changeTimeout)
    changeTimeout = setTimeout(function () {
        utils.moveAllFile('dev')
    }, 100)
})


function checkPathIsNeedWatch(path) {
    let isWatchResult = false
    if (/event.js$/.test(path) ||
        /methods.js$/.test(path) ||
        /model.js$/.test(path) ||
        /\.history/g.test(path) ||
        /\.vscode/g.test(path) ||
        /simpleway/g.test(path)
    ) {
        isWatchResult = true
    }
    return isWatchResult
}
