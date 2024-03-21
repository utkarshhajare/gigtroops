import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-workerdisplay',
  templateUrl: './workerdisplay.component.html',
  styleUrl: './workerdisplay.component.css'
})
export class WorkerdisplayComponent {
//     worker : any=[{
//       name: "XYZ",
//       area: "Gachiboli",
//       priceday: "1000",
//       pricehr: "287",


//     }
// ]
  allemps: any;
  constructor(private empser: WorkerService,private router:Router) {
  
    }
    ngOnInit(): void {
      this.empser.getAllWorkers().subscribe((data: any) => {
        this.allemps = data;
      });
    }
    navigateToDetails(workerId: number) {
      this.router.navigate(['details', workerId]);
    }
}
