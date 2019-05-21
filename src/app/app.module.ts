import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from '../nav/navbar.component';
import { AppComponent } from './app.component';
//import { MyWorksComponent } from '../myWorks/myWorks.component';
import { AboutMeComponent } from '../aboutMe/aboutMe.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    //MyWorksComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
