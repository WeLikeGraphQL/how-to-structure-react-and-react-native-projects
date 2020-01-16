const path = require('path');

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) =>
          path.join(process.cwd(), `./node_modules/${name}`),
        // get: (target, name) => {
        //   if (name === 'react-native') {
        //     return path.resolve(__dirname, 'node_modules/react-native');
        //   }
        //   if (name === 'react') {
        //     // console.log('REACT EXTRA MODULE');
        //     return path.resolve(__dirname, 'node_modules/react');
        //   }
        //   // console.log(process.cwd(), name);
        //   return path.join(
        //     process.cwd(),
        //     `native_modules/node_modules/${name}`,
        //   );
        // },
      },
    ),
  },
  projectRoot: path.resolve(__dirname),
  watchFolders: [
    path.resolve(__dirname, '../components'),
    path.resolve(__dirname, '../core'),
    path.resolve(__dirname, '../node_modules'),
  ],
};
