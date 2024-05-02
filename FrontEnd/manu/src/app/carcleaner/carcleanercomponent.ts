import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-carcleaner',
  templateUrl: './carcleaner.component.html',
  styleUrls: ['./carcleaner.component.css']
})
export class CarcleanerComponent implements OnInit {
  allemps: any;

  constructor(private empser: WorkerService, private router: Router) {}

  ngOnInit(): void {
    this.empser.getAllWorkers().subscribe((data: any) => {
      this.allemps = data.filter((worker: any) => worker.category === "Car Cleaner");
    });
  }

  navigateToDetails(workerId: number) {
    this.router.navigate(['details', workerId]);
  }
}
