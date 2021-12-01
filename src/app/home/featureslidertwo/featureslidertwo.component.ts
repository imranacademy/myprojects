import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-featureslidertwo',
  templateUrl: './featureslidertwo.component.html',
  styleUrls: ['./featureslidertwo.component.css']
})
export class FeatureslidertwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      easing: 'ease-in-out-sine'
    });
  }

}
