import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategorystashComponent } from './categorystash/categorystash.component';
import { CategorytargetComponent } from './categorytarget/categorytarget.component';

@NgModule({
  declarations: [
    AppComponent,
    CategorystashComponent,
    CategorytargetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
