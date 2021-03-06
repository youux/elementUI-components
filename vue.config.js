const path = require('path')

module.exports = {
  outputDir: 'dist',
  publicPath: '/',
  productionSourceMap: false,
  runtimeCompiler: true,
  devServer: {
    port: 2222,
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: path.join(__dirname, 'src'),
        store: path.join(__dirname, 'src/store'),
        views: path.join(__dirname, 'src/views'),
        pages: path.join(__dirname, 'src/pages'),
        assets: path.join(__dirname, 'src/assets'),
        components: path.join(__dirname, 'src/components')
      }
    }
  }
}
