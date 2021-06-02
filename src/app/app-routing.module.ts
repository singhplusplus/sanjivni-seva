import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {BloodRequirementComponent} from "./blood-requirement/blood-requirement.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {UnauthorizedComponent} from "./unauthorized/unauthorized.component";
import {AdminComponent} from "./admin/admin.component";
import {GalleryComponent} from "./gallery/gallery.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  },
  {
    path: 'blood-requirement',
    component: BloodRequirementComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class SanjivniSevaRoutingModule { }

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
