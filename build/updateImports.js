const dirs = require('./dirs.js')

const { getDirectoriesBasenames } = require('./utils.js')
const { writeFileSync, appendFileSync } = require('fs')

writeFileSync(`${dirs.src}/_imports.js`, '')
writeFileSync(`${dirs.src}/_imports.pug`, '')

const pages = getDirectoriesBasenames(dirs.pages)
const components = getDirectoriesBasenames(dirs.components)

const rewriteFiles = (instance, isPage) => {
	const normalizeJsPath = isPage ? './pages' : './components'

	const map = {
		js: `
    import '${normalizeJsPath}/${instance}/${instance}'
    import '${normalizeJsPath}/${instance}/${instance}.scss'`,
		pug: `include ~@/components/${instance}/${instance}\n`
	}

	for (let key in map) {
		if (isPage && key === 'pug') continue

		const data = map[key]

		appendFileSync(`${dirs.src}/_imports.${key}`, data)
	}
}

pages.forEach(page => {
	rewriteFiles(page, true)
})

components.forEach(component => {
	rewriteFiles(component)
})
