const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfSocios",

  // Exporta para que lo capture el lazy loading del routing de mf-shell.
  exposes: {
    "./BusquedaIndividuosModule":
      "./projects/mf-socios/src/app/busqueda-individuos/busqueda-individuos.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
