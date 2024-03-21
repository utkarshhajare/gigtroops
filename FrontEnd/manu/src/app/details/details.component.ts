// import { Component } from '@angular/core';
// import { WorkerService } from '../worker.service';

// @Component({
//   selector: 'app-details',
//   templateUrl: './details.component.html',
//   styleUrl: './details.component.css'
// })
// export class DetailsComponent {

//   wordet: any;
//   constructor(private empser: WorkerService) {
  
//     }
//     ngOnInit(): void {
//       this.empser.getWorkerById().subscribe((data: any) => {
//         this.wordet = data;
//       });
//     }
// }
import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from '../worker.service';
import { HireService } from '../hire.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  workerDetails: any;

  constructor(
    private route: ActivatedRoute,
    private workerService: WorkerService,
    private hireService: HireService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const workerId = +params['id'];
      this.workerService.getWorkerById(workerId).subscribe((data: any) => {
        this.workerDetails = data;
      });
    });
  }
  hireWorker(workerId: number) {
    this.hireService.sendHireRequest(workerId)
      .subscribe(
        response => {
          console.log('Hire request sent successfully', response);
          // Handle success (maybe show a confirmation message)
          alert("Hire request sent successfully");
        },
        error => {
          console.error('Error sending hire request', error);
          // Handle error (maybe show an error message)
        }
      );
  }
}
