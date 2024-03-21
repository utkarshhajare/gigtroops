import { Component, OnInit } from '@angular/core';

import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  loginStatus: any;
   constructor(private service : WorkerService){

   }
   ngOnInit(): void {
    this.service.getUserLoggedStatus().subscribe((loginStatusData: any) => {
      this.loginStatus = loginStatusData;
    });
  }
  
   }
// export class HeaderComponent implements OnInit {
//   isLoggedIn: boolean = false; // Default to false until we fetch the actual login status

//   constructor(private service: WorkerService) {}

//   ngOnInit(): void {
//     this.service.getUserLoggedStatus().subscribe((loginStatusData: boolean) => {
//       this.isLoggedIn = loginStatusData;
//     });
//   }
// }




