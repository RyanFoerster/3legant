import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { ArrowRight, LucideAngularModule, Menu, Star, X } from 'lucide-angular';
import { routes } from './app.routes';

const icons = {
  ArrowRight,
  X,
  Menu,
  Star,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick(icons)),
  ],
};
