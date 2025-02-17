import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';


import { routes } from './app.routes';
import FridgeTheme from './theme.preset';
import { provideServiceWorker } from '@angular/service-worker';
import userRoutes from './features/identity/user/user.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([...routes,...userRoutes]),
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



