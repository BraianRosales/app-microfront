const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfMix",

  exposes: {
    "./IndividuosComerciosModule":
      "./projects/mf-mix/src/app/individuos-comercios/individuos-comercios.module.ts",
  },

  remotes: {
    mfSocios: "http://localhost:4201/remoteEntry.js",
    mfComercios: "http://localhost:4202/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
