const fs = require('fs')

const run = () => {
  const version = process.argv.length > 2 ? process.argv[2] : null

  if (version && version.indexOf('release-') !== -1) {
    let packageJson = fs.readFileSync('./package.json')
    let json = JSON.parse(packageJson)
        json.version = version.split('release-')[1]
    fs.writeFileSync('./package.json', JSON.stringify(json, null, 2))
  }
}

run()
