import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StarwarsUiModule } from '@starwars/starwars-ui';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, StarwarsUiModule, MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
