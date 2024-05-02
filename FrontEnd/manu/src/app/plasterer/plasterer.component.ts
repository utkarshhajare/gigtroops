import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-plasterer',
  templateUrl: './plasterer.component.html',
  styleUrls: ['./plasterer.component.css']
})
export class PlastererComponent implements OnInit {
  allemps: any;

  constructor(private empser: WorkerService, private router: Router) {}

  ngOnInit(): void {
    this.empser.getAllWorkers().subscribe((data: any) => {
      this.allemps = data.filter((worker: any) => worker.category === "Plasterer");
    });
  }

  navigateToDetails(workerId: number) {
    this.router.navigate(['details', workerId]);
  }
}
