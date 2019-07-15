const { readdirSync, writeFileSync, readFileSync } = require('fs')
const dirs = require('./dirs')

module.exports = (targetName, isPage) => {
  const path = isPage
    ? `${dirs.pages}/${targetName}/_imports`
    : `${dirs.components}/${targetName}/_imports`

  const property = isPage ? 'pages' : 'components'

  readdirSync(path).forEach(file => {
    writeFileSync(`${path}/${file}`, '')
  })

  const depsPath = `${dirs.src}/globalDeps.json`
  const deps = JSON.parse(readFileSync(depsPath))

  deps[property][targetName] = []

  writeFileSync(depsPath, JSON.stringify(deps))
}
