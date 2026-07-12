import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners, SecurityContext } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideMarkdown, SANITIZE } from 'ngx-markdown'

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { Globals } from './globals';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()), 
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()), provideClientHydration(),
    provideMarkdown({
      sanitize: {
        provide: SANITIZE,
        useValue: SecurityContext.NONE
      },
    }),
  ],
};
