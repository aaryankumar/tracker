import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCurrency:string="INR";
  constructor(){}
  sendCurrency(event:string){
    console.warn(event);
  }
}
