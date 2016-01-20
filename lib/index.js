'use strict';

let Transform = require('readable-stream/transform'),
    fs        = require('fs')

function gulpNgTemplateUrl(){
  let transformStream = new Transform({objectMode: true})

  transformStream._transform = (file, encoding, callback) => {

    if(file.isNull()) return callback(null, file)
    if(file.isBuffer()) findTemplateUrl.bind(this, file.contents.toString())
    else {
      let stringContent = '';
      file.contents.on('data', (data) => stringContent += data.toString())
      file.contents.on('end', (data) => findTemplateUrl.bind(this, stringContent))
    }

    function findTemplateUrl(template){
      let templateUrlRegExp = new RegExp(/templateUrl/);
      if(!templateUrlRegExp.test(template)) return callback(null, file)
      let newTemplate = template
                          .split('\n')
                          .map(line  => {
                            if(templateUrlRegExp.test(line)){
                              let newString   = '',
                                  path        = line.slice(line.search(/'|`|"/g) +1, line.length -2),
                                  fileContent = fs.readFileSync(path).toString()
                                line = `template: '${fileContent.split('\n').reduce((prev, next) => prev += next.trim(),' ')}'`
                            }
                            return line
                          })
                          .join('\n')

        this.push(new Buffer(newTemplate))

        return callback()
    }
  }

  return transformStream
}


module.exports = gulpNgTemplateUrl
