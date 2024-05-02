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
import { ActivatedRoute } from '@angular/router';
import { WorkerService } from '../worker.service';
import { HireService } from '../hire.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'] // Use styleUrls instead of styleUrl
})
export class DetailsComponent implements OnInit {
  workerDetails: any;
  
  clientId: number| undefined = undefined; // Don't initialize clientId here

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

    // Retrieve the client ID from localStorage
    const clientDataString = localStorage.getItem('clientData');
    if (clientDataString) {
      const clientData = JSON.parse(clientDataString);
      this.clientId = clientData.id;
     
    } else {
      // Handle scenario where client data is not found
      console.error('Client data not found in localStorage');
    }
  }
 
  hireWorker(workerId: number): void {
    if (this.clientId !== undefined) {
      this.hireService.sendHireRequest(workerId, this.clientId)
        .subscribe(
          response => {
            console.log('Hire request sent successfully', response);
            alert("Hire request sent successfully");
          },
          error => {
            console.error('Error sending hire request', error);
          }
        );
    } else {
      console.error('clientId is undefined');
     
    }
  }
}
