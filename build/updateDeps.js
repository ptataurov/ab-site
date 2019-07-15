const { writeFileSync, readFileSync } = require('fs')

const { getDirectoriesBasenames } = require('./utils.js')

const updateDep = require('./updateDep.js')
const dirs = require('./dirs')

const pageNames = getDirectoriesBasenames(`${dirs.pages}`)
const componentNames = getDirectoriesBasenames(`${dirs.components}`)

const depsPath = `${dirs.src}/globalDeps.json`

const globalDeps = JSON.parse(readFileSync(depsPath))

globalDeps.pages = {}
globalDeps.components = {}

writeFileSync(depsPath, JSON.stringify(globalDeps))

pageNames.forEach(name => {
  updateDep(name, true)
})

componentNames.forEach(name => {
  updateDep(name)
})

console.log('Dependencies successfully updated')
