import {Component, NgModule, OnInit} from '@angular/core';
import {Auth} from "../common-services/auth.service";
import {MdCard} from "@angular/material";
import {ContentService} from "../common-services/content.service";

@NgModule({
  imports:[
    MdCard
  ]
})

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private content = [{}];
  private personalDetailsLabel = '';
  private contactDetailsLabel = '';
  private sevaHistoryLabel = '';
  private pdNameLabel = '';
  private pdDOBLabel = '';
  private pdBloodGroupLabel = '';
  private pdBodyWeightLabel = '';
  private cdContactNoLabel = '';
  private cdWhatsappContactNoLabel = '';
  private cdAddressLabel = '';

  private lat: number = 22.7196;

  private lng: number = 75.8577;
  private zoom: number = 12;
  private isVisible: boolean = false;
  private isDraggable: boolean = true;
  private addr: string;

  private address: string;

  private profileContent = JSON.stringify(this.auth.userProfile);

  constructor(private auth: Auth, private _contentService : ContentService){}

  ngOnInit(): void {
    this._contentService.getContent('HI', 'SJ_PROFILE')
      .subscribe(
        /* response is received. */
        contentResp => {
          this.content = contentResp;
          /* setting all the content properties. */
          for(let contentElement of this.content) {
            if(contentElement['code'] === 'PERSONAL_DETAILS') {
              this.personalDetailsLabel = contentElement['value'];
            }
            else if(contentElement['code'] === 'CONTACT_DETAILS') {
              this.contactDetailsLabel = contentElement['value'];
            }
            else if(contentElement['code'] === 'SEVA_HISTORY') {
              this.sevaHistoryLabel = contentElement['value'];
            }
            else if(contentElement['code'] === 'PD_NAME') {
              this.pdNameLabel = contentElement['value'];
            }
            else if(contentElement['code'] === 'PD_DOB') {
              this.pdDOBLabel = contentElement['value'];
            }
            else if(contentElement['code'] === 'PD_BLOOD_GROUP') {
              this.pdBloodGroupLabel = contentElement['value'];
            }
            else if(contentElement['code'] === 'PD_BODY_WEIGHT') {
              this.pdBodyWeightLabel = contentElement['value'];
            }
            else if(contentElement['code'] === 'CD_CONTACT_NO') {
              this.cdContactNoLabel = contentElement['value'];
            }
            else if(contentElement['code'] === 'CD_WHATSAPP_CONTACT_NO') {
              this.cdWhatsappContactNoLabel = contentElement['value'];
            }
            else if(contentElement['code'] === 'CD_ADDRESS') {
              this.cdAddressLabel = contentElement['value'];
            }
          }
        },
        /* initialize side navigation links. */
        /* error receive response. */
        err => console.error(err)
      );
  }

  clickedOnMap(mapClickEvent) {
    console.log('map click event - ' + JSON.stringify(mapClickEvent));
    const latClick = mapClickEvent.coords.lat;
    const lngClick = mapClickEvent.coords.lng;
    console.log("latClick - " + latClick + "\nlngClick - " + lngClick);
    this._contentService.getAddress(latClick,lngClick).subscribe(mapResp => {
        this.addr = mapResp;
      },
      err => console.error(err)
    );
    let formattedAddr;
    if(this.addr){
      formattedAddr = this.addr['results'][0]['formatted_address'];
      this.address = JSON.stringify(formattedAddr);
    }
    console.log('addr - ' + JSON.stringify(formattedAddr));
  }
}
