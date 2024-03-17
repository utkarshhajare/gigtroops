import { Component } from '@angular/core';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrl: './adminpage.component.css'
})
export class AdminpageComponent {
  allemps: any;

  constructor(private service: WorkerService) {
  
    }
    ngOnInit(): void {
      this.service.getAllWorkers().subscribe((data: any) => {
        this.allemps = data;
         console.log("workers: " + data);
      });
      // console.log("workers: " + this.allemps);
    }
    deleteWor(worId: any) {
      console.log("workerId in adminPage deleteWor table: " + worId)
        this.service.deleteWorker(worId).subscribe((data: any) => {
          console.log(data);
        });
    
        const i = this.allemps.findIndex((worker: any) => {
          return worker.workerId == worId;
        });
      // for(var i=0;i<this.allemps.length;i++){
      
      //   if(this.allemps.workerId===worId){
      //       break;
      //   }
      // }
      console.log('The delete of index is '+i);
        this.allemps.splice(i, 1);
    
      }
    
  }
