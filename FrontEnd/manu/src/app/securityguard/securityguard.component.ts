import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-securityguard',
  templateUrl: './securityguard.component.html',
  styleUrls: ['./securityguard.component.css']
})
export class SecurityguardComponent implements OnInit {
  allemps: any;

  constructor(private empser: WorkerService, private router: Router) {}

  ngOnInit(): void {
    this.empser.getAllWorkers().subscribe((data: any) => {
      this.allemps = data.filter((worker: any) => worker.category === "Security Guard");
    });
  }

  navigateToDetails(workerId: number) {
    this.router.navigate(['details', workerId]);
  }
}
