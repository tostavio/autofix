module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'assets/*': './src/assets',
          'constants/*': './src/constants',
          'containers/*': './src/containers',
          'redux/*': './src/redux',
          'routes/*': './src/routes',
          'services/*': './src/services',
          'shared/*': './src/shared',
          'utils/*': './src/utils',
        },
      },
    ],
    [
      'babel-plugin-styled-components',
      {
        displayName: true,
        ssr: false,
        fileName: true,
        minify: true,
        transpileTemplateLiterals: true,
        pure: true,
      },
    ],
  ],
};
