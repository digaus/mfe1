import { ApplicationConfig, LOCALE_ID, NgZone } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    (globalThis as any).ngZone
      ? { provide: NgZone, useValue: (globalThis as any).ngZone }
      : [],
    {
      provide: LOCALE_ID,
      useValue: 'de',
    },
  ],
};
