import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { RemoteEntryComponent } from './app/remote-entry/entry.component';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
// import {AppModule} from "./app/app.module";

bootstrapApplication(RemoteEntryComponent, appConfig).catch((err) =>
  console.error(err)
);


// const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);
// bootstrap().catch(err => console.error(err));
