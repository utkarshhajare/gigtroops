
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-gardener',
  templateUrl: './gardener.component.html',
  styleUrls: ['./gardener.component.css'] // Change styleUrl to styleUrls
})
export class GardenerComponent implements OnInit {
  allemps: any;

  constructor(private empser: WorkerService,private router:Router) {}

  ngOnInit(): void {
    this.empser.getAllWorkers().subscribe((data: any) => {
      this.allemps = data.filter((worker :any) => worker.category === "Gardener");
    });
  } navigateToDetails(workerId: number) {
    this.router.navigate(['details', workerId]);
  }
}
