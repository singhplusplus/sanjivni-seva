import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {MaterialModule, MdMenuModule} from "@angular/material";
import {SanjivniSevaRoutingModule} from "./app-routing.module";
import {BloodRequirementComponent} from './blood-requirement/blood-requirement.component';
import {LoginComponent} from './login/login.component';
import {AUTH_PROVIDERS} from "angular2-jwt";
import {Auth} from "./common-services/auth.service";
import { ProfileComponent } from './profile/profile.component';
import {AuthGuard} from "./auth.guard";
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AdminComponent } from './admin/admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import {CommonModule} from "@angular/common";
import {AgmCoreModule} from "angular2-google-maps/core";
import { ContactUsComponent } from './contact-us/contact-us.component';
import {DatePickerModule} from "ng2-datepicker/index";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BloodRequirementComponent,
    LoginComponent,
    ProfileComponent,
    UnauthorizedComponent,
    AdminComponent,
    AboutUsComponent,
    GalleryComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNvCk8YwpdaSAHnt50d2i1g1wLjT6E6UM'
    }),
    MaterialModule.forRoot(),
    SanjivniSevaRoutingModule,
    DatePickerModule
  ],
  providers: [
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
