
const fs = require('fs');
const path = require('path');
function resolve(dir) {
    return path.resolve(__dirname, dir)
}
const join = path.join
function getEntries(path) {
    let files = fs.readdirSync(resolve(path));
    const entries = files.reduce((ret, item) => {
        const itemPath = join(path, item)
        const isDir = fs.statSync(itemPath).isDirectory();
        if (isDir) {
            ret[item] = resolve(join(itemPath, 'index.js'))
        } else {
            const [name] = item.split('.')
            ret[name] = resolve(`${itemPath}`)
        }
        return ret
    }, {})
    return entries
}
module.exports = {
    outputDir: 'lib',
    productionSourceMap: false,
    configureWebpack: {
        entry: {
            ...getEntries('src/components'),
        },
        output: {
            filename: '[name]/index.js',
            libraryTarget: 'commonjs2',
        }
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
        config.plugins.delete('copy')
        config.plugins.delete('html')
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
        config.plugins.delete('hmr')
        config.entryPoints.delete('app')
    },

};