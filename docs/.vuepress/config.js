module.exports = {
  title: 'vue2-components',
  base: '/vue2/',
  componentsDir: '.vuepress/components/',
  themeConfig: {
    sidebar: [
      '/',
      '/componentDocs/scroll-number.md'
    ]
  },
  configureWebpack: { module: { rules: [ { test: /.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] } ] } } 
}