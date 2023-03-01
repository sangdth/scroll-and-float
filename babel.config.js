module.exports = (api) => {
  const isTest = api.env('test');
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      [
        '@babel/preset-typescript',
        {
          allowDeclareFields: true,
          onlyRemoveTypeImports: true,
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      [
        '@babel/preset-env',
        isTest
          ? {
              browserslistEnv: 'test',
            }
          : {
              browserslistEnv: 'production',
            },
      ],
    ],
    // plugins: [
    //   [
    //     'babel-plugin-styled-components',
    //     {
    //       pure: true,
    //       meaninglessFileNames: ['index', 'styles'],
    //       topLevelImportPaths: ['*(../)utils/styled', '*(../)styled'],
    //     },
    //   ],
    //   [
    //     'module-resolver',
    //     {
    //       root: ['./src'],
    //     },
    //   ],
    // ],
  };
};
