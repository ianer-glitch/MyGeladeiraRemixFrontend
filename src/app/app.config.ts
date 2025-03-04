import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';


import { routes } from './app.routes';
import FridgeTheme from './theme.preset';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { fridgeRoutes } from './features/fridge/fridge.routes';
import AdminGuard from './core/guards/admin/AdminGuard';


export const appConfig: ApplicationConfig = {
  providers: [
    {provide:'baseUrl',useValue:""},
    MessageService,
    AdminGuard,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
          preset: FridgeTheme,
          options: {
            darkModeSelector: ''
        }
      }
  }), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
};



