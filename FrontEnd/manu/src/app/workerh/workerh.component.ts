import { Component, OnInit } from '@angular/core';
import { HireService } from '../hire.service';
import { WorkerService } from '../worker.service';
interface WorkRequest {
  id: number;
  status: string;
  // Other properties of WorkRequest
}
@Component({
  selector: 'app-workerh',
  templateUrl: './workerh.component.html',
  styleUrl: './workerh.component.css'
})
export class WorkerhComponent implements OnInit {
  workerId: number = 1; // Assuming the worker ID is hardcoded for demonstration
  requests: WorkRequest[] = [{ id: 1, status: 'Pending' },
  { id: 2, status: 'Approved' },];

  constructor(private workerService: WorkerService, private hireService: HireService) {}

  ngOnInit(): void {
    this.loadWorkerRequests();
  }

  loadWorkerRequests(): void {
    this.workerService.getWorkerRequests(this.workerId)
      .subscribe(requests => this.requests = requests);
  }

  acceptRequest(requestId: number): void {
    this.workerService.acceptRequest(requestId)
      .subscribe(() => {
        // Refresh requests after accepting
        this.loadWorkerRequests();
      });
  }

  denyRequest(requestId: number): void {
    this.workerService.denyRequest(requestId)
      .subscribe(() => {
        // Refresh requests after denying
        this.loadWorkerRequests();
      });
  }
  sendHireRequest(workerId: number): void {
    this.hireService.sendHireRequest(workerId)
      .subscribe(() => {
        // Handle success
      }, error => {
        // Handle error
      });
  }
}