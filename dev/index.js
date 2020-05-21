const { exec } = require('child_process')
const fs = require('fs')

function stats (folder) {
  const path = '../vue-2/src/examples/' + folder
  const folders = fs.readdirSync(path)

  return new Promise((resolve, reject) => {
    console.log(folder)

    const promises = folders.map((folder) => {
      return new Promise((resolve, reject) => {
        const command = `node_modules/.bin/sloc ${path}/${folder} --details --format cli-table --keys total,source,comment`
        exec(command, (err, stdout, stderr) => {
          console.error(err || stdout)
          resolve()
        })
      })
    })

    return Promise.all(promises).then(resolve)
  })
}

stats('class-store')
  .then(() => {
    stats('other')
  })
