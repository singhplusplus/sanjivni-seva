import { Component, NgModule } from '@angular/core';
import { MdCard } from "@angular/material";

@NgModule({
  imports:[
    MdCard
  ]
})

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(){}

}
