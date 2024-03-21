// import { Component, OnInit } from '@angular/core';
// import { WorkerService } from '../worker.service';

// @Component({
//   selector: 'app-electrician',
//   templateUrl: './electrician.component.html',
//   styleUrl: './electrician.component.css'
// })
// export class ElectricianComponent implements OnInit{
//   allemps: any;
//   constructor(private empser: WorkerService) {
  
//     }
//     ngOnInit(): void {
//       this.empser.getAllWorkers().subscribe((data: any) => {
//         this.allemps = data.filter(worker => worker.category === "Electrician");
//       });
//     }


// }
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-labour',
  templateUrl: './labour.component.html',
  styleUrls: ['./labour.component.css'] // Change styleUrl to styleUrls
})
export class LabourComponent implements OnInit {
  allemps: any;

  constructor(private empser: WorkerService,private router:Router) {}

  ngOnInit(): void {
    this.empser.getAllWorkers().subscribe((data: any) => {
      this.allemps = data.filter((worker :any) => worker.category === "Labour");
    });
  }
}
