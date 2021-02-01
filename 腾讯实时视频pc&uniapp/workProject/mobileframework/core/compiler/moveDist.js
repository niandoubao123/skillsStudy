const glob = require("glob")
const PATH = require('path')
const fs = require('fs')
const utils = require('./base-utils.js')

let rootPath = PATH.resolve('./')
let projectPath = PATH.resolve(PATH.relative(rootPath, '../'))

utils.mkdir(projectPath)
copyFile(rootPath + '/dist/**/*')


function copyFile(path, fileHandler) {
  let files = glob.sync(path)
  files.forEach(p => {
    let from = utils.sepPath(p)
    let to = projectPath + utils.sepPath(from.replace(rootPath, '').replace(/[\\\/]/g, '\\'))
    console.log(to)
    utils.copy(from, to, fileHandler)
  })
  return files
}


