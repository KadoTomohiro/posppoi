import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { appRoutingProviders, routing } from "./app.routes";
import { BarcodeReaderDirective } from './barcode-reader/barcode-reader.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BarcodeReaderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
