const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/scripts/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/templates/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: './sw.bundle.js',
      runtimeCaching: [
        {
          urlPattern: ({ url }) =>
            url.href.startsWith('https://restaurant-api.dicoding.dev/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'therestodb-api',
          },
        },
        {
          urlPattern: ({ url }) =>
            url.href.startsWith(
              'https://restaurant-api.dicoding.dev/images/small/'
            ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'therestodb-small-image-api',
          },
        },
        {
          urlPattern: ({ url }) =>
            url.href.startsWith(
              'https://restaurant-api.dicoding.dev/images/medium/'
            ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'therestodb-medium-image-api',
          },
        },
        {
          urlPattern: ({ url }) =>
            url.href.startsWith(
              'https://restaurant-api.dicoding.dev/images/large/'
            ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'therestodb-large-image-api',
          },
        },
        {
          urlPattern: ({ url }) =>
            url.href.startsWith(
              'https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css'
            ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'remixicon-font',
          },
        },
        {
          urlPattern: ({ url }) =>
            url.href.startsWith(
              'https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC&family=Prociono&display=swap'
            ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'default-font',
          },
        },
        {
          urlPattern: ({ url }) =>
            url.href.startsWith(
              'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
            ),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'icon-favorite-detail',
          },
        },
      ],
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public'),
          to: path.resolve(__dirname, 'dist'),
          globOptions: {
            // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
            ignore: ['**/images/**'],
          },
        },
      ],
    }),
    new BundleAnalyzerPlugin(),
  ],
};
