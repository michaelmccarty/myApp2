import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

<<<<<<< HEAD
platformBrowserDynamic().bootstrapModule(AppModule)
=======
platformBrowserDynamic()
  .bootstrapModule(AppModule)
>>>>>>> 772b4145b70838af49e5ee5823a4f26f3ebde4ae
  .catch(err => console.error(err));
