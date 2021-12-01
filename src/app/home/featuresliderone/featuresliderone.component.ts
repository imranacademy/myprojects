import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-featuresliderone',
  templateUrl: './featuresliderone.component.html',
  styleUrls: ['./featuresliderone.component.css']
})
export class FeatureslideroneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      easing: 'ease-in-out-sine'
    });
  }

}
