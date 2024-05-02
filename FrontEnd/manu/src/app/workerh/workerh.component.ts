import { Component, OnInit } from '@angular/core';
import { HireService } from '../hire.service';
import { WorkerService } from '../worker.service';
interface WorkRequest {
  id: number;
  client: Client;
  worker: Worker;
}

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  address: string;
}
@Component({
  selector: 'app-workerh',
  templateUrl: './workerh.component.html',
  styleUrl: './workerh.component.css'
})
export class WorkerhComponent implements OnInit {
  workerId: number=0; // Assuming the worker ID is hardcoded for demonstration
  WorkRequests :any[]=[];
  respondedWorkRequests :any[]=[];
  constructor(private workerService: WorkerService, private hireService: HireService) {}

  ngOnInit(): void {
    const workerDataString = localStorage.getItem('workerData');
    if (workerDataString) {
      const workerData = JSON.parse(workerDataString);
      this.workerId = workerData.workerId;
     
    }
    this.loadWorkerRequests();
    this.loadRespondedWorkerRequests();
  }

  loadWorkerRequests(): void {
    this.workerService.getWorkerRequests(this.workerId)
      .subscribe(requests => this.WorkRequests = requests);
      
  }
  loadRespondedWorkerRequests(): void {
    this.workerService.getRespondedWorkRequests(this.workerId)
      .subscribe(requests => this.respondedWorkRequests = requests);
  }
  acceptRequest(requestId: number): void {
    this.workerService.acceptRequest(requestId)
      .subscribe(() => {
        // Refresh requests after accepting
        this.loadWorkerRequests();
        this.loadRespondedWorkerRequests();
      });
  }

  denyRequest(requestId: number): void {
    this.workerService.denyRequest(requestId)
      .subscribe(() => {
        // Refresh requests after denying
        this.loadWorkerRequests();
        this.loadRespondedWorkerRequests();
      });
  }
 
}