import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent implements OnInit {
  allemps: any;

  constructor(private empser: WorkerService, private router: Router) {}

  ngOnInit(): void {
    this.empser.getAllWorkers().subscribe((data: any) => {
      this.allemps = data.filter((worker: any) => worker.category === "Mechanic");
    });
  }

  navigateToDetails(workerId: number) {
    this.router.navigate(['details', workerId]);
  }
}
