const { withNativeFederation, share, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mf1',

  exposes: {
    // "./routes": "./src/app/app.routes.ts",

   // './Component': './src/app/app.component.ts',
   './web-components': './src/bootstrap.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    ...share(
        [
          '@angular/common/locales/de',
          '@angular/common/locales/de-DE',
        ].reduce(
          (acc, name) => ({
            ...acc,
            [name]: { singleton: true, strictVersion: true, requiredVersion: 'auto', includeSecondaries: false },
          }),
          {},
        ),
    ),
  },


  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]
  
});
