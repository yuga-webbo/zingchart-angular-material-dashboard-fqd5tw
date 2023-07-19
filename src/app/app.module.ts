import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZingchartAngularModule } from 'zingchart-angular';

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, FormsModule,    ZingchartAngularModule,],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

