import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {Router} from "@angular/router";

declare var Auth0Lock: any;

@Injectable()
export class Auth {

  private customizingLoginOptions = {
    allowSignUp: false,
    theme: {
      logo: '../sanjivni-seva-logo.png',
      primaryColor: 'rgb(25,118,210)'
    },
    languageDictionary: {
      title: "Sanjivni Seva"
    }
  };

  // Configure Auth0
  loginLock = new Auth0Lock('yxktp5iua1VsdMOHSukjgHfn5brVAnm8', 'sanjivniseva.auth0.com', this.customizingLoginOptions);

  //Store profile object in auth class
  userProfile: Object;

  constructor(private router: Router) {
    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for lock `authenticated` event
    this.loginLock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.loginLock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          console.error('Error fetching user profile - ' + error);
          return;
        }

        // Redirect to the saved URL, if present.
        var redirectUrl: string = localStorage.getItem('redirect_url');
        if(redirectUrl != undefined){
          this.router.navigate([redirectUrl]);
          localStorage.removeItem('redirect_url');
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.loginLock.show();
    // this.loginLock.show({
    //   // callbackURL: 'http://192.168.40.103:4200/',
    //   callbackURL: 'http://192.168.40.103:4200/',
    //   responseType: 'token',
    //   authParams: {
    //     state: this.router.url,
    //     scope: 'openid profile'
    //   }
    // });
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token and profile from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  };

  public isAdmin() {
    return this.userProfile && this.userProfile['app_metadata']
      && this.userProfile['app_metadata'].roles
      && this.userProfile['app_metadata'].roles.indexOf('admin') > -1;
  }


}
