import {Component, NgModule, OnInit} from '@angular/core';
import {MdToolbar, MdSidenav, MdSidenavLayout, MdButton} from "@angular/material";
import {ContentService} from './common-services/content.service';
import {NavigationLink} from "./navigation.link";
import {Auth} from "./common-services/auth.service";

@NgModule({
  imports:[
    MdSidenavLayout,
    MdSidenav,
    MdToolbar,
    MdButton
  ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ContentService]
})

export class AppComponent implements OnInit {

  constructor(private _contentService : ContentService, private auth: Auth) { }

  private content = [{}];

  private sideNavigationLinks: NavigationLink[] = [];
  private sideNavLoginLink: NavigationLink = {
    destRoute: '',
    displayText: ''
  };
  private sideNavLogoutLink: NavigationLink = {
    destRoute: '',
    displayText: ''
  };
  private sideNavProfileLink: NavigationLink = {
    destRoute: '',
    displayText: ''
  };
  private sideNavAdminLink: NavigationLink = {
    destRoute: '',
    displayText: ''
  };
  private sideNavBloodReqLink: NavigationLink = {
    destRoute: '',
    displayText: ''
  };

  private appTitle = '';
  private sidenavClose = '';
  private navToolTipMenu = '';
  private navBloodReq = '';
  private navAdmin = '';
  private navProfile = '';
  private navLogin = '';
  private navLogout = '';
  private navGallery = '';
  private navAboutus = '';
  private navContactus = '';

  ngOnInit(): void {
    this._contentService.getContent('EN', 'SJ_APP')
      .subscribe(
        /* response is received. */
        contentResp => {
          this.content = contentResp;
          /* setting all the content properties. */
          for(let contentElement of this.content) {
            if(contentElement['code'] === 'APP_TITLE') {
              this.appTitle = contentElement['value'];
            }
            else if(contentElement['code'] === 'NAV_T_TIP_MENU') {
              this.navToolTipMenu = contentElement['value'];
            }
            else if(contentElement['code'] === 'NAV_CLOSE') {
              this.sidenavClose = contentElement['value'];
            }
            else if(contentElement['code'] === 'NAV_BLOOD_REQ') {
              this.navBloodReq = contentElement['value'];
              this.sideNavBloodReqLink = {destRoute: 'blood-requirement', displayText: this.navBloodReq};
            }
            else if(contentElement['code'] === 'NAV_ADMIN') {
              this.navAdmin = contentElement['value'];
              this.sideNavAdminLink = {destRoute: 'admin', displayText: this.navAdmin};
            }
            else if(contentElement['code'] === 'NAV_PROFILE') {
              this.navProfile = contentElement['value'];
              this.sideNavProfileLink = {destRoute: 'profile', displayText: this.navProfile};
            }
            else if(contentElement['code'] === 'NAV_ABOUTUS') {
              this.navAboutus = contentElement['value'];
              const navLinkAboutus : NavigationLink = {destRoute: 'about-us', displayText: this.navAboutus};
              this.sideNavigationLinks.push(navLinkAboutus);
            }
            else if(contentElement['code'] === 'NAV_GALLERY') {
              this.navGallery = contentElement['value'];
              const navLinkGallery : NavigationLink = {destRoute: 'gallery', displayText: this.navGallery, isActive: true};
              this.sideNavigationLinks.push(navLinkGallery);
            }
            else if(contentElement['code'] === 'NAV_CONTACTUS') {
              this.navContactus = contentElement['value'];
              const navLinkContactus : NavigationLink = {destRoute: 'contact-us', displayText: this.navContactus};
              this.sideNavigationLinks.push(navLinkContactus);
            }
            else if(contentElement['code'] === 'NAV_LOGIN') {
              this.navLogin = contentElement['value'];
              this.sideNavLoginLink = {destRoute: '', displayText: this.navLogin};
            }
            else if(contentElement['code'] === 'NAV_LOGOUT') {
              this.navLogout = contentElement['value'];
              this.sideNavLogoutLink = {destRoute: '', displayText: this.navLogout};
            }
          }
        },
        /* initialize side navigation links. */
        /* error receive response. */
        err => console.error(err)
      );
  }

}
