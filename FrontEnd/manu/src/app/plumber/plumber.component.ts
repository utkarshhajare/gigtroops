
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-plumber',
  templateUrl: './plumber.component.html',
  styleUrls: ['./plumber.component.css'] // Change styleUrl to styleUrls
})
export class PlumberComponent implements OnInit {
  allemps: any;

  constructor(private empser: WorkerService,private router:Router) {}

  ngOnInit(): void {
    this.empser.getAllWorkers().subscribe((data: any) => {
      this.allemps = data.filter((worker :any) => worker.category === "Plumber");
    });
  }
  navigateToDetails(workerId: number) {
    this.router.navigate(['details', workerId]);
  }
}
