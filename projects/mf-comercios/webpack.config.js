const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "mfComercios",

  // Exporta para que lo capture el lazy loading del routing de mf-shell.
  exposes: {
    "./BusquedaComerciosModule":
      "./projects/mf-comercios/src/app/busqueda-comercios/busqueda-comercios.module.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
