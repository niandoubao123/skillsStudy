const fs = require('fs')
const PATH = require('path')
module.exports = {
  delDir (path) {
    let files = []
    if (fs.existsSync(path)) {
      files = fs.readdirSync(path)
      files.forEach((file, index) => {
        let curPath = path + "/" + file
        if (fs.statSync(curPath).isDirectory()) {
          this.delDir(curPath) //递归删除文件夹
        } else {
          fs.unlinkSync(curPath) //删除文件
        }
      })
      fs.rmdirSync(path)
    }
  },
  copy (from, to, fileHandler) {
    const type = this.pathType(from)
    if (type === "file") {
      this.copyFile(from, to, fileHandler)
    } else {
      this.copyDir(from, to, fileHandler)
    }
  },
  sepPath (path) {
    return path.replace(/[\\\/]/g, PATH.sep)
  },
  copyFile (from, to, fileHandler) {
    let buffer = fs.readFileSync(PATH.resolve(from).split(PATH.sep).join('/'))
    if (fileHandler) {
      let result = fileHandler(from, buffer, to)
      if (!result) return
      if (result instanceof ArrayBuffer) {
        buffer = result
      } else {
        buffer = result.buffer
        from = result.from
        to = result.to
      }
    }
    this.mkdir(to.replace(/[^\\\/]+[\/\\]*$/, ''))
    fs.writeFileSync(PATH.resolve(to).split(PATH.sep).join('/'), buffer)
  },
  copyDir (from, to, fileHandler) {
    // console.log('呵呵，没实现')
  },
  pathType (path) {
    let stat = fs.statSync(path)
    if (stat.isDirectory()) {
      return 'dir'
    }
    if (stat.isFile()) {
      return 'file'
    }
    return false
  },
  mkdir (path) {
    try {
      fs.mkdirSync(PATH.resolve(path))
    } catch (e) {
      if (fs.existsSync(PATH.resolve(path))) return
      this.mkdir(path.replace(/[^\\\/]+[\\\/]*$/, ''))
      this.mkdir(path)
    }
  }
}
