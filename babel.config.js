module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/entities/*': ['./src/entities/*'],
          '@/middlewares/*': ['./src/middlewares/*'],
          '@/providers/*': ['./src/providers/*'],
          '@/routes/*': ['./src/routes/*'],
          '@/useCases/*': ['./src/useCases/*'],
          '@/utils/*': ['./src/utils/*'],
          '@/repositories/*': ['./src/repositories/*']
        }
      }
    ],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }]
  ]
};
