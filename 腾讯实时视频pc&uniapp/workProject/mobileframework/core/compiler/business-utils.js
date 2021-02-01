const utils = require('./base-utils.js')
const glob = require("glob")
const PATH = require('path')
const fs = require('fs')
const vueFileTemplate = fs.readFileSync(PATH.resolve('core/compiler/vueFileTemplate.vue')).toString()
let rootPath = PATH.resolve('../')
let customProjectName = process.env.npm_config_customProject || ''
module.exports = {
    distPath: utils.sepPath('src'),
    delDir() {
        utils.delDir(this.distPath)
    },
    copyFile(path, fileHandler) {
        let files = glob.sync(path)
        files.forEach(p => {
            let from = utils.sepPath(p)
            let to = utils.sepPath(from.replace(rootPath, '').replace(/[\\\/]/g, '\\').replace(/^\\*src/, this.distPath.replace(/[\\\/]/g, '\\')))
            utils.copy(from, to, fileHandler)
    })
        return files
    },
    moveAllFile(model) {
        this.moveOtherFile()
        this.moveVueFile()
        this.newComponent(model)
    },
    moveOtherFile(path) {
        // 移动其他资源
        this.copyFile(path || (rootPath ? rootPath + '/src/**/*.!(vue|js)' : 'src/**/*.!(vue|js)'))
        if (!path) {
            this.copyFile((rootPath ? rootPath + '/src/*.*' : 'src/*.*'))
            this.copyFile(rootPath ? rootPath + '/src/external-components/**/*' : 'src/external-components/**/*')
            this.copyFile(rootPath ? rootPath + '/src/common/**/*' : 'src/common/**/*')
            this.copyFile(rootPath ? rootPath + '/src/store/**/*' : 'src/store/**/*')
            this.copyFile(rootPath ? rootPath + '/src/interceptor/**/*.js' : 'src/interceptor/**/*.js')
            this.copyFile(rootPath ? rootPath + '/src/static/**/*.js' : 'src/static/**/*.js')
        }
    },
    checkCustom(srcFile) {
        let customFile = srcFile.replace(/([\\\/])src([\\\/])/, `$1src$1project-custom$1${customProjectName}$1`)
        return customFile
    },
    newComponent(model) {
        // 全局注册组件
        let vueFiles = glob.sync(this.distPath + '/**/index.vue')
        let baseComponentsFiles = glob.sync(this.distPath + '/base-components/**/*.vue')
        let businessComponentsFiles = glob.sync(this.distPath + '/business-components/**/*.vue')
        let externalComponentsFiles = glob.sync(this.distPath + '/external-components/**/*.vue')
        let componentsFiles = baseComponentsFiles.concat(businessComponentsFiles).concat(externalComponentsFiles)
        let rPath = PATH.resolve(this.distPath)
        let staticPath = rPath.split(PATH.sep).join('/').split('mobileframework')[0]
        console.log(staticPath)
        let componentsList = ``
        componentsFiles.map(function (vuePath) {
            let vuePathArr = vuePath ? vuePath.split('/') : []
            let fromPath = vuePath.replace('src', '.')
            let componentType = vuePathArr[1].replace('components', '')
            componentsList += `
import ${vuePathArr[vuePathArr.length - 2].replace(/-/g, '')} from '${fromPath}'
Vue.component("${componentType + vuePathArr[vuePathArr.length - 2]}", ${vuePathArr[vuePathArr.length - 2].replace(/-/g, '')})`
        })
        let r_data = fs.readFileSync(PATH.resolve(rPath.split(PATH.sep).join('/') + '/main.js'), {flag: 'r+', encoding: 'utf8'}, (err, data) => {}).toString()
        r_data = r_data + componentsList
        var w_data = new Buffer(r_data)
        // // 删除main.js
        fs.unlink(PATH.resolve(rPath.split(PATH.sep).join('/') + '/main.js'), (err, data) => {})
        // // 添加main.js
        fs.readFileSync(PATH.resolve(rPath.split(PATH.sep).join('/') + '/main.js'), {flag: 'w+', encoding: 'utf8'},(err, data) => {})
        fs.writeFileSync(PATH.resolve(rPath.split(PATH.sep).join('/') + '/main.js'), w_data, (err, data) => {})

        // console.log(PATH.resolve(rPath.split(PATH.sep).join('/') + '/manifest.js')
        // import manifest from PATH.resolve(rPath.split(PATH.sep).join('/') + '/manifest.js'
        //     console.log(manifest)
        // let rm_data = fs.readFileSync(PATH.resolve(rPath.split(PATH.sep).join('/') + '/manifest.js'), {flag: 'r+', encoding: 'utf8'}, (err, data) => {}).toString()
        // var wm_data = new Buffer(rm_data)
        // // // 删除manifest.js
        // fs.unlink(PATH.resolve(rPath.split(PATH.sep).join('/') + '/manifest.js'), (err, data) => {})
        // // // 添加manifest.js
        // fs.readFileSync(PATH.resolve(rPath.split(PATH.sep).join('/') + '/manifest.json'), {flag: 'w+', encoding: 'utf8'},(err, data) => {})
        // fs.writeFileSync(PATH.resolve(rPath.split(PATH.sep).join('/') + '/manifest.json'), wm_data, (err, data) => {})



        // 根据目录结构过滤、获取合法的 index.vue 文件，并且目录结构所能体现的信息
        // console.log(externalComponentsFiles)
        /* vueFiles = vueFiles.map(function (vuePath) {
          console.log(vuePath)
        }) */
        // vueFiles = vueFiles.concat(externalComponentsFiles)
        // vueFiles = vueFiles.map(function (vuePath) {
        //   let vuePathArr = vuePath ? vuePath.split('/') : []
        //   if (vuePathArr.length && !vuePathArr.includes('layout')) {
        //     // let name = RegExp.$1
        //     let name = vuePathArr[vuePathArr.length - 2]
        //     let baseComponent = false
        //     let externalComponents = false
        //     let businessComponent = false
        //     let baseSubComponent = false
        //     let businessSubComponent = false
        //     let subComponent = false
        //     let rootPage = false
        //     let subPage = false
        //     switch (true) {
        //       // 基础组件
        //       case /^src.base-components.[^\\\/]*?.index.vue$/.test(vuePath):
        //         baseComponent = true
        //         break
        //       // uniapp组件
        //       case /^src.external-components.[^\\\/]*?.[^\\\/]*?.vue$/.test(vuePath):
        //         externalComponents = true
        //         break
        //       // 业务组件
        //       case /^src.business-components.[^\\\/]*?.index.vue$/.test(vuePath):
        //         businessComponent = true
        //         break
        //       // 基础组件的子组件
        //       case /^src.base-components.+components.[^\\\/]*?.index.vue$/.test(vuePath):
        //         baseSubComponent = true
        //         break
        //       // 其他子组件（可以调用基础组件）
        //       case /^src.layout.+components.[^\\\/]*?.index.vue$/.test(vuePath):
        //       case /^src.pages.+components.[^\\\/]*?.index.vue$/.test(vuePath):
        //         subComponent = true
        //         break
        //       // 其他子组件（可以调用基础组件，区分业务组件的子组件）
        //       case /^src.business-components.+components.[^\\\/]*?.index.vue$/.test(vuePath):
        //         subComponent = true
        //         businessSubComponent = true
        //         break
        //       // 页面
        //       case /^src.pages.[^\\\/]*?.index.vue$/.test(vuePath):
        //         rootPage = true
        //         break
        //       case /^src.pages.+children.[^\\\/]*?.index.vue$/.test(vuePath):
        //         subPage = true
        //         break
        //     }
        //     return {
        //       name,
        //       path: vuePath,
        //       baseComponent,
        //       externalComponents,
        //       businessComponent,
        //       baseSubComponent,
        //       rootPage,
        //       subPage,
        //       subComponent,
        //       businessSubComponent,
        //     }
        //   } else if (/^src.core.autoCode.layout.index.vue$/.test(vuePath)) {
        //     return {
        //       name: 'layout',
        //       path: vuePath,
        //       isLayout: true,
        //     }
        //   }
        //   return false
        // })
        //   .filter(item => item)
        // let baseComponent = vueFiles.filter(item => item.baseComponent)
        // let externalComponents = vueFiles.filter(item => item.externalComponents)
        // let businessComponent = vueFiles.filter(item => item.businessComponent)
        // let subComponent = vueFiles.filter(item => item.subComponent)
        // let rootPage = vueFiles.filter(item => item.rootPage)
        // let subPage = vueFiles.filter(item => item.subPage)
        // let baseSubComponent = vueFiles.filter(item => item.baseSubComponent)
        // let businessSubComponent = vueFiles.filter(item => item.businessSubComponent)
        // let layout = vueFiles.filter(item => item.isLayout)
        // // TODO 路由
        //
        //
        // // 组件：调试模式下才需要限制组件的调用权限，打包时全部全局注册就好了，可以减少体积
        // // 调试模式：
        // // if (model === 'dev')
        // {
        //   // vue是有全局组件这么个说法的，技术上完全可行，但是业务上并不期望有全局组件
        //   // 页面里、页面的私有组件可以使用 src/components 下的所有组件，但是 src/components 里并不能使用 src/components 下的根组件
        //   // 更容易理解的说法是：不允许同级组件相互调用
        //   let tempType = 'import components file'
        //   let registerTemp = vueFileTemplate.match(new RegExp(`\\/\\*${tempType} template:([\\s\\S]*?)\\*\\/`))
        //   registerTemp = (registerTemp && registerTemp[1]) || ''
        //   rootPage.concat(subPage).concat(subComponent).concat(businessComponent).concat(layout).forEach(pageItem => {
        //     let componentTemp = ''
        //
        //     // 清空组件配置
        //     let itemPath = PATH.resolve(pageItem.path)
        //     let pageTemplate = fs.readFileSync(itemPath).toString()
        //     pageTemplate = this.replaceTemplate(pageTemplate, 'import components file', () => '\n')
        //     if (pageItem.subComponent) {
        //       pageTemplate = pageTemplate.replace(/%component-type/g, 'private')
        //     } else if (pageItem.businessComponent) {
        //       pageTemplate = pageTemplate.replace(/%component-type/g, 'business')
        //     } else if (pageItem.baseComponent) {
        //       pageTemplate = pageTemplate.replace(/%component-type/g, 'base')
        //     } else {
        //       pageTemplate = pageTemplate.replace(/%component-type-/g, '')
        //     }
        //
        //
        //     // 注册基础组件
        //     baseComponent.forEach(item => {
        //       componentTemp += registerComponent.call(this, item, pageItem, 'base', pageTemplate)
        //     })
        //
        //     // uniapp组件
        //     externalComponents.forEach(item => {
        //       componentTemp += registerComponent.call(this, item, pageItem, 'external', pageTemplate)
        //     })
        //
        //     // 业务组件之间相互 require 引用，造成其中 1个不能正确加载
        //     // 并且同级组件之间相互调用是不太好的行为，如果不同业务组件需要组合在一起，应该由页面组合
        //     // 所以业务组件，只有页面能够调用
        //     if (!businessSubComponent.includes(pageItem) && !businessComponent.includes(pageItem)) {
        //       businessComponent.forEach(item => {
        //         componentTemp += registerComponent.call(this, item, pageItem, 'business', pageTemplate)
        //       })
        //     }
        //
        //     // 注册私有组件
        //     let pcs = subComponent.filter(item => {
        //       return /^components.[^\\\/]*?.$/.test(item.path.replace(/index.vue$/, '').replace(pageItem.path.replace(/index.vue$/, ''), ''))
        //     })
        //     if (pcs.length) {
        //       pcs.forEach(pc => {
        //         componentTemp += registerComponent.call(this, pc, pageItem, 'private', pageTemplate)
        //       })
        //     }
        //     console.log('writeFileSync------------------------------------')
        //     console.log(itemPath.split(PATH.sep).join('/'))
        //     fs.writeFileSync(itemPath.split(PATH.sep).join('/'), this.replaceTemplate(pageTemplate, 'import components file', () => componentTemp))
        //   })
        //   // src/components/ 里的组件
        //   baseComponent.forEach(rpItem => {
        //     let componentTemp = ''
        //
        //     // 清空组件配置
        //     let itemPath = PATH.resolve(rpItem.path)
        //     let pageTemplate = fs.readFileSync(itemPath).toString()
        //     pageTemplate = this.replaceTemplate(pageTemplate, 'import components file', () => '\n')
        //     pageTemplate = pageTemplate.replace(/%component-type/g, 'base', pageTemplate)
        //
        //     // 注册私有组件
        //     let srps = baseSubComponent.filter(item => {
        //       return /^components.[^\\\/]*?.$/.test(item.path.replace(/index.vue$/, '').replace(rpItem.path.replace(/index.vue$/, ''), ''))
        //     })
        //     if (srps.length) {
        //       srps.forEach(srp => {
        //         componentTemp += registerComponent.call(this, srp, rpItem, 'private', pageTemplate)
        //       })
        //     }
        //     fs.writeFileSync(itemPath.split(PATH.sep).join('/'), this.replaceTemplate(pageTemplate, 'import components file', () => componentTemp))
        //   })
        //   function registerComponent(component, page, type = '', pageTemplate) {
        //     let path = PATH.relative(PATH.resolve(page.path), component.path).replace(/\\/g, '/').replace(/^\.\.\//, './')
        //     // let reg = `</${type}-${component.name}>`
        //     // if (!path || pageTemplate.indexOf(reg) === -1) return '' // 按需加载
        //     if (!path) return '' // 如果没有路径，是无法注册的（业务组件注册业务组价注册业务组件的时候，不能注册自身）
        //     let componentName = type ? type + '-' + component.name : component.name
        //     return registerTemp.replace(/%name/g, componentName).replace(/%path/g, path)
        //   }
        // }
        // // 打包模式
        // if (model === 'build')
        // {
        //   // TODO 打包时全部全局注册就好了，可以减少体积
        // }
    },
    moveVueFile(path) {
        /**
         * 是否只移动vue文件，其他文件不做处理
         * @type {boolean}
         */
        let justVueFile = !!path
        if (justVueFile) {
            this.copyFile(path, (from, buffer, to) => {
                to = to.replace(new RegExp(String.raw`autoCode[\\\/]project-custom[\\\/]${customProjectName}`), 'autoCode')
                let fromFile = fs.readFileSync(PATH.resolve(from)).toString()
                let toFile = fs.readFileSync(PATH.resolve(to)).toString()
                return {
                    buffer: Buffer.from(toFile.replace(/^[\s\S]*(\n<\!--☯js)/g, function (match, $1) {
                        return fromFile + $1
                    })),
                    from, to
                }
            })
            return
        }

        /**
         * 用glob语法匹配.vue文件
         * @type {string}
         */
        let globVuePath = rootPath ? rootPath + '/src/**/index.vue' : 'src/**/index.vue'

        // 处理非 custom 文件夹里 vue 文件，并复制到 autoCode 目录
        this.copyFile(globVuePath, (from, buffer, to) => {
            /**
             * vue文件所在的目录
             * @type {undefined|null|void|string|*} 如：D:\GitLab\devicemaintenance-ui_2.x\src\base-components\expand-button\
             */
            let dir = PATH.resolve(from).replace(/[^\/\\]+\.vue$/, '')
            /**
             * vue文件的文本内容
             * @type {string}
             */
            let vueContent = buffer.toString()
            /**
             * 当前vue文件所在的目录里，有哪些需要自动注册的js文件
             * @type {{}}
             */
            let currentDirJs = {}
            /**
             * 匹配src目录下所有的js文件的路径
             * @type {string[]}
             */
            let jsFiles = glob.sync(rootPath ? rootPath + '/src/**/*.js' : 'src/**/*.js')

            // 注册非 custom 文件夹里的js
            jsFiles.forEach(jsPath => {
            jsPath = PATH.resolve(jsPath)
            /**
             * 判断是不是和 dir 同一个目录的正则表达式
             * @type {RegExp}
             */
            let isSameDir = new RegExp(dir.replace(/\\/g, '\\\\') + '[^\\/\\\\]+\\.js$')
            if (!isSameDir.test(jsPath)) return // 如果不是同一个目录就 return
        /**
         * js 的文件名，如：event.js、methods.js、model.js
         * @type {RegExpMatchArray | Promise<Response | undefined> | * | boolean}
         */
        let jsName = jsPath.match(/[^\/\\]+\.js/)
        jsName = jsName && jsName[0]
        if (!jsName) return // 只自动注册上述 3中js文件，其他文件不理会
        if (currentDirJs[jsName]) return // 如果这个文件名已经被注册了（custom里注册的）
        currentDirJs[jsName] = jsPath
    })
        return replaceContent(vueContent, currentDirJs, to, from)
    })

        function replaceContent(vueContent, currentDirJs, to, from) {
            to = to.replace(new RegExp(String.raw`autoCode[\\\/]project-custom[\\\/]${customProjectName}`), 'autoCode')
            let modelContent = 'let model = {}'
            let eventContent = 'let life = {}; let event = {}; let watch = {}'
            let methodsContent = 'const methodsSource = {}'
            if (currentDirJs['model.js']) {
                modelContent = `import * as modelJS from '${PATH.relative(PATH.resolve(to), currentDirJs['model.js']).replace(/\\/g, '/').replace(/^\.\.\//, '')}'
  const model = modelJS.default ? modelJS.default : modelJS`
            }
            if (currentDirJs['event.js']) {
                eventContent = `import * as eventJs from '${PATH.relative(PATH.resolve(to), currentDirJs['event.js']).replace(/\\/g, '/').replace(/^\.\.\//, '')}'
  const {event, life, watch} = eventJs.default ? eventJs.default : eventJs`
            }
            if (currentDirJs['methods.js']) {
                methodsContent = `import * as methodsJs from '${PATH.relative(PATH.resolve(to), currentDirJs['methods.js']).replace(/\\/g, '/').replace(/^\.\.\//, '')}'
  const methodsSource = methodsJs.default ? methodsJs.default : methodsJs`
            }
            let name = from.match(/([^\/\\]+)[\\\/][^\/\\]+$/)[1]
            console.log(PATH.join(__dirname,'../'))
            console.log(PATH.relative(PATH.resolve(to), PATH.resolve('src')).replace(/\\/g, '/'))
            if (/\<script\>/.test(vueContent)) {
                vueContent = vueFileTemplate
                    .replace(/\<script\>[\s\S]+?\<\/script\>/, '')
                    .replace(/%template%/, vueContent)
            } else {
                vueContent = vueFileTemplate
                    .replace(/%template%/, vueContent)
                    // .replace(/%import window%/, `import window from '${PATH.relative(PATH.resolve(to), PATH.resolve('src')).replace(/\\/g, '/') + '/common/utils/index.js'}'`)
                    // .replace(/%import CONFIG%/, `import CONFIG as methodsJs from '${PATH.relative(PATH.resolve(to), PATH.resolve('src')).replace(/\\/g, '/') + '/core/vmConfigHandler.js'}'`)
                    .replace(/%import event%/, eventContent)
                    .replace(/%import model%/, modelContent)
                    .replace(/%import methods%/, methodsContent)
                    // .replace(/%name/g, '%component-type-' + name)
                    .replace(/%name/g, name)
                    .replace(/%vmConfigHandlerPath/g, PATH.relative(PATH.resolve(to), PATH.resolve('src')).replace(/\\/g, '/') + '/core/vmConfigHandler.js')
                //提供唯一绑定标识  供测试使用
                vueContent = vueContent.replace(/v-model.?\w*=(['"]\S+['"])/g, function (match, $1) {
                    return match + ' for-test=' + $1
                })
            }
            return {
                buffer: Buffer.from(vueContent),
                from, to
            }
        }
    },
    replaceTemplate(content, type, templateHandler) {
        let template = content.match(new RegExp(`\\/\\*${type} template:([\\s\\S]*?)\\*\\/`))
        template = (template && template[1]) || ''
        template = templateHandler(template)
        return content.replace(new RegExp(`(\\/\\*start:${type}\\*\\/)[\\s\\S]*?(\\/\\*end:${type}\\*\\/)`, 'g'), `$1\n${template}$2`)
    }
}
