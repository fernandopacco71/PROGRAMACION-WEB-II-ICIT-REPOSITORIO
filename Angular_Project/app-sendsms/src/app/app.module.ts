import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ONEcomponentComponent } from './onecomponent/onecomponent.component';
import { TwoComponentComponent } from './two-component/two-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ONEcomponentComponent,
    TwoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
