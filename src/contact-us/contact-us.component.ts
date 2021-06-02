import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {

  constructor() { }

  private lat: number = 22.7196;
  private lng: number = 75.8577;
  private zoom: number = 12;
  private isVisible: boolean = true;
  private isDraggable: boolean = true;

}
