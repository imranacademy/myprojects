import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'alfaweb';
  constructor(private todo: PostsService) {}

  ngOnInit() {
    //this.todo.gettodos().subscribe(x=>console.log(x))
    /** spinner starts on init */
   // this.spinner.show();

    // setTimeout(() => {
      /** spinner ends after 5 seconds */
     // this.spinner.hide();
    // }, 5000);
  }
}
