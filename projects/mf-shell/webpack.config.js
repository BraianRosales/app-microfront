const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  remotes: {
    mfSocios: "http://localhost:4201/remoteEntry.js",
    mfComercios: "http://localhost:4202/remoteEntry.js",
    mfMix: "http://localhost:4203/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
