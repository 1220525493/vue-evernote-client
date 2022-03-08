const fs = require('fs')
const path = require('path')

const mockBaseURl = 'https://note-server.hunger-valley.com'
const realBaseURL = 'https://note-server.hunger-valley.com'

exports.config =function ({isDev=true}={isDev:true}){
  let fileText = `module.exports={
     baseURL:'${isDev ? mockBaseURl : realBaseURL}'
  }
  `
  fs.writeFileSync(path.join(__dirname,'../src/helpers/config-baseURL.js'),fileText)
}
