import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { RemResponsiveUtils } from './app/utils/rem-responsive/rem-responsive.utils'
import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

RemResponsiveUtils.init()
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err))
