import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mobile!:boolean;

  constructor() {
    let width = window.innerWidth;
    if(width <= 1000){
      this.mobile = true;
    }else{
      this.mobile = false;

    }
   }

  ngOnInit(): void {
  }

}
