module.exports = ctx => {
  var config = {
    plugins: [
      require('stylelint')(),
      require('postcss-cssnext')({
        browsers: 'last 2 versions',
        features: {
          customProperties: {
            variables: {
              maxWidth: '60rem',

              background: '#fbfbfb',
              text: '#222',
              primaryColor: '#512da8',
              primaryLight: '#8559da',
              primaryDark: '#140078',
              secondaryColor: '#5c6bc0',
              secondaryLight: '#8e99f3',
              secondaryDark: '#26418f',
            },
          },
          customMedia: {
            extensions: {
              '--mediumWidth': '(min-width: 480px)',
              '--largeWidth': '(min-width: 720px)',
              '--desktopWidth': '(min-width: 1024px)'
            },
          },
          customSelectors: {
            extensions: {
              ':--hover': ':hover, :active, :focus',
            }
          },
        },
      }),
    ],
  }

  if (ctx.env == 'development')
    config.plugins.push(require('postcss-browser-reporter')())

  return config
}
