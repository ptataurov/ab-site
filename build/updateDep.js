const { writeFileSync, readFileSync, appendFileSync } = require('fs')
const dirs = require('./dirs')
const resetDep = require('./resetDep.js')

const updateDep = (targetName, isPage) => {
  resetDep(targetName, isPage)

  const property = isPage ? 'pages' : 'components'
  const targetPath = isPage
    ? `${dirs.pages}/${targetName}`
    : `${dirs.components}/${targetName}`

  const targetDeps = JSON.parse(readFileSync(`${targetPath}/deps.json`))

  const globalDepsPath = `${dirs.src}/globalDeps.json`

  const globalDeps = JSON.parse(readFileSync(globalDepsPath))

  const globalDepsSubTarget = globalDeps[property][targetName]

  const addDep = dep => {
    globalDepsSubTarget.push(dep)

    writeFileSync(globalDepsPath, JSON.stringify(globalDeps))
  }

  const rewriteFiles = dep => {
    const normalizeJsPath = isPage ? '../../../components' : '../..'

    const map = {
      js: `import '${normalizeJsPath}/${dep}/${dep}'\n`,
      pug: `include ~@/components/${dep}/${dep}\n`
    }

    for (let key in map) {
      const data = map[key]
      appendFileSync(`${targetPath}/_imports/import.${key}`, data)
    }
  }

  const isContains = dep => globalDepsSubTarget.some(el => el === dep)

  targetDeps.forEach(dep => {
    if (!isContains(dep)) {
      rewriteFiles(dep)

      addDep(dep)
    }
  })
}

module.exports = updateDep
