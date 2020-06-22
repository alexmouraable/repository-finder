import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResearchFieldComponent } from './components/research-field/research-field.component';
import { StartComponent } from './components/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    ResearchFieldComponent,
    StartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
