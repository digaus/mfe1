import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/


(async () => {
    const app = await createApplication(appConfig)
  
    const mfe1Root = createCustomElement(AppComponent, {
      injector: app.injector,
    });
  
    customElements.define('mfe1-root', mfe1Root);
    const root = document.createElement('mfe1-root');
    document.querySelector('app-root')?.appendChild(root)
  })();
