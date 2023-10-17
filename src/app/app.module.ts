import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonAddComponent } from './counter/button-add/button-add.component';
import { ButtonSubComponent } from './counter/button-sub/button-sub.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonAddComponent,
    ButtonSubComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
