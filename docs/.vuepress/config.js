module.exports = {
  title: 'vue2-components',
  base: '/vue2-scroll-number/',
  componentsDir: '.vuepress/components/',
  themeConfig: {
    sidebar: [
      '/',
      '/componentDocs/scroll-number.md'
    ]
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.scss$/,
          sideEffects: false, // 解决样式height丢失问题
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    }
  } 
}