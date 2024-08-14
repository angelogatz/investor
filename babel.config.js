module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          modules: './src/modules',
          components: './src/components'
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel', 
        '@iconscout/react-unicons/babel'
      ],
    },
  },
};