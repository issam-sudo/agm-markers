
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmToolsComponent } from './agm-tools/agm-tools.component';
import { AgmCoreModule } from '@agm/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
 
@NgModule({
  declarations: [
    AppComponent,
    AgmToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkCkK4N39fnuq86Fk0risyGhA8rMRBkZU'
    }),

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
