import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {provideState, provideStore} from "@ngrx/store";
import {storeFeature} from "@micro-frontend-angular-nx/store";
import {provideEffects} from "@ngrx/effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideStore(),
    provideState(storeFeature),
    provideEffects([])
  ],
};
