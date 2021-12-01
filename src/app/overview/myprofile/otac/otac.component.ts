import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OverviewService } from '../../services/overview.service';

@Component({
  selector: 'app-otac',
  templateUrl: './otac.component.html',
  styleUrls: ['./otac.component.css']
})
export class OtacComponent implements OnInit {
  obj:any={};
  constructor(private overviewService:OverviewService,private route:Router ) { }

  ngOnInit() {
    this. obj = JSON.parse(localStorage.getItem('otacvalue'));
   // console.log(this.obj)
  }
  submit(f){
    // console.log(f.value)
    const otactComplete = f.value.otacemail + f.value.otacsms
    this.obj.Otac = otactComplete;
    this.overviewService.ChangePackage(this.obj).subscribe({
      next:(res)=>{
        localStorage.removeItem('otacvalue');
        alert(res)
        this.route.navigateByUrl('/overview/overview-tabs/account');
      },
      error:({error})=>{
        console.log(error)
        localStorage.removeItem('otacvalue');
      }
    }
    )
  }

}
