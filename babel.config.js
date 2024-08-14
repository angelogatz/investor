module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          home: './src/modules/Home',
          user: './src/modules/User',
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