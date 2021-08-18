import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AishaComponent } from './aisha/aisha.component';
import { TwoComponent } from './two/two.component';
import { FrancisComponent } from './francis/francis.component';

@NgModule({
  declarations: [
    AppComponent,
    AishaComponent,
    TwoComponent,
    FrancisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
