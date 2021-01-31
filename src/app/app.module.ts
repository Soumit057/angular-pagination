import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importing the pagination module for the application.
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  // Including the pagination module in the application module.
  imports: [
    BrowserModule, NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
