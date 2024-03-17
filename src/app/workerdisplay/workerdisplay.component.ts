import { Component } from '@angular/core';
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
  constructor(private empser: WorkerService) {
  
    }
    ngOnInit(): void {
      this.empser.getAllWorkers().subscribe((data: any) => {
        this.allemps = data;
      });
    }
}
