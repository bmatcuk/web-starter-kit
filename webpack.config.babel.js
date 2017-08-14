// Module support is disabled in .babelrc since webpack understands it.
// So, we can't use import/export here =(

const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const NamedModulesPlugin = webpack.NamedModulesPlugin
const HashedModuleIdsPlugin = webpack.HashedModuleIdsPlugin
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
const EnvironmentPlugin = webpack.EnvironmentPlugin
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin
const NoEmitOnErrorsPlugin = webpack.NoEmitOnErrorsPlugin
const RequiredAssetsPlugin = require('./lib/RequiredAssetsPlugin')

const project = require('./package.json')

const SRC = path.resolve(__dirname, 'src')
const DEV = process.env.NODE_ENV == 'development'

// For the web, we either need the style-loader in development
// mode, or we need the ExtractTextPlugin for production.
function buildWebStyleLoaders(loaders) {
  if (DEV) {
    return ['style-loader', ...loaders]
  } else {
    return ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: loaders
    })
  }
}

// For the server, we need to change the css-loader to use css-loader/locals.
// It's a variant that does not actually include any CSS. Instead, it just
// returns a map of class names to generated module names.
function buildServerStyleLoaders(loaders) {
  for (let i = 0; i < loaders.length; i++) {
    if (loaders[i].loader) {
      if (loaders[i].loader == 'css-loader') {
        loaders[i].loader = 'css-loader/locals'
        break
      }
    } else if (loaders[i] == 'css-loader') {
      loaders[i] = 'css-loader/locals'
      break
    }
  }
  return loaders
}

module.exports = () => {
  // Common loader configs. CSS loaders are transformed by the
  // buildStyleLoaders function, depending on the environment.
  const moduleConfig = (buildStyleLoaders) => ({
    rules: [
      // javascript files
      {
        test: /\.jsx?$/,
        include: SRC,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          },

          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              emitError: DEV,
              emitWarning: DEV,
              configFile: '.eslintrc.dev',
            }
          },
        ]
      },

      // markdown files
      {
        test: /\.mdx?$/,
        include: [
          SRC,
          path.resolve(__dirname, 'README.md'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          },

          {
            loader: 'mdx-loader',
          },
        ]
      },

      // css files
      {
        test: /\.css$/,
        include: SRC,
        exclude: /\.global\.css$/,
        use: buildStyleLoaders([
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: (
                DEV
                  ? '[path][name]--[local]--[hash:base64:5]'
                  : '[hash:base64:5]'
              ),
            }
          },

          'postcss-loader',
        ]),
      },

      // global css files
      {
        test: /\.global\.css$/,
        include: SRC,
        use: buildStyleLoaders([
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },

          'postcss-loader',
        ]),
      },

      // assets
      {
        test: /\.(html|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2)$/,
        include: SRC,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
              context: SRC,
            }
          },
        ]
      },

      // inline svg
      {
        test: /\.svg$/,
        include: SRC,
        use: [
          'raw-loader',
        ]
      },
    ]
  })

  // Shared plugins
  const pluginsConfig = [
    new EnvironmentPlugin({
      NODE_ENV: 'development',
    }),

    new NoEmitOnErrorsPlugin(),
  ]

  // WEB CONFIG
  const webConfig = {
    name: 'web',
    context: SRC,
    devtool: DEV ? 'cheap-module-eval-source-map' : 'source-map',
    target: 'web',

    entry: {
      web: [
        ...DEV && [
          'react-hot-loader/patch',
          'webpack-hot-middleware/client',
        ],
        './browser.js',
      ],

      vendor: Object.keys(project.dependencies),
    },

    output: {
      path: path.resolve(__dirname, 'build', 'public'),
      filename: DEV ? '[name].[hash].js' : '[name].[chunkhash].js',
      publicPath: '/',
      pathinfo: DEV
    },

    module: moduleConfig(buildWebStyleLoaders),

    plugins: [
      DEV ? new NamedModulesPlugin() : new HashedModuleIdsPlugin(),

      new ExtractTextPlugin({
        filename: 'web.[contenthash].css',
        disable: DEV,
        allChunks: true,
      }),

      new CommonsChunkPlugin({
        name: 'vendor',
      }),

      ...pluginsConfig,

      ...DEV && [
        new HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
          title: project.name,
        }),
      ],

      ...!DEV && [
        new RequiredAssetsPlugin('../assets.json'),
      ],
    ],
  }

  // In development mode, we only need a web config
  if (DEV)
    return webConfig

  // SERVER CONFIG
  const serverConfig = {
    name: 'server',
    context: SRC,
    devtool: false,
    target: 'node',

    entry: {
      server: [
        './server.js',
      ],
    },

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      pathinfo: false,
      library: 'serverRenderer',
      libraryExport: 'default',
      libraryTarget: 'commonjs2',
    },

    module: moduleConfig(buildServerStyleLoaders),

    plugins: pluginsConfig,
  }

  return [webConfig, serverConfig]
}
