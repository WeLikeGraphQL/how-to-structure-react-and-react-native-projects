const path = require("path");
const withTranspileModules = require("next-transpile-modules");
const withCustomBabelConfigFile = require("next-plugin-custom-babel-config");

module.exports = withCustomBabelConfigFile(
  withTranspileModules({
    transpileModules: ["@graphan/components", "@graphan/core"],
    babelConfigFile: path.resolve("../babel.config.js"),
    webpack: config => {
      config.plugins = config.plugins.filter(plugin => {
        if (plugin.constructor.name === "ForkTsCheckerWebpackPlugin")
          return false;
        return true;
      });
      return config;
    }
  })
);

// const withSourceMaps = require("@zeit/next-source-maps");
// const withTM = require("next-transpile-modules");

// // Tell webpack to compile the "bar" package
// // https://www.npmjs.com/package/next-transpile-modules
// module.exports = withSourceMaps(
//   withTM({
//     transpileModules: ["@graphan/components", "@graphan/core"],
//     webpack: config => {
//       config.plugins = config.plugins.filter(plugin => {
//         if (plugin.constructor.name === "ForkTsCheckerWebpackPlugin")
//           return false;
//         return true;
//       });
//       return config;
//     }
//   })
// );
