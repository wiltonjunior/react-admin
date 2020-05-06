const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@src': path.resolve(__dirname, 'src'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@assets': path.resolve(__dirname, 'src/assets'),
    '@shared': path.resolve(__dirname, 'src/shared'),
    '@css': path.resolve(__dirname, 'src/assets/css'),
    '@js': path.resolve(__dirname, 'src/assets/js'),
    '@scss': path.resolve(__dirname, 'src/assets/scss'),
    '@images': path.resolve(__dirname, 'src/assets/images'),
    '@layouts': path.resolve(__dirname, 'src/shared/layouts'),
    '@variables': path.resolve(__dirname, 'src/shared/variables'),
    '@components': path.resolve(__dirname, 'src/shared/components'),
    '@constants': path.resolve(__dirname, 'src/shared/constants'),
    '@contexts': path.resolve(__dirname, 'src/shared/contexts'),
    '@services': path.resolve(__dirname, 'src/shared/services')
  })
)