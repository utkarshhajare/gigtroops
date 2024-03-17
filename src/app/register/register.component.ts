import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Use styleUrls instead of styleUrl
})
export class RegisterComponent {
  clients: any[] = []; // Initialize as an empty array
 

  constructor(private router: Router, private service: WorkerService) {
  }

  registerClient(form: any) {
    console.log('before push:');

    for (let cli of this.clients) {
      console.log(cli);
    }

    // add the new object to workers array
    this.clients.push(form);

    console.log('after push:');
    for (let cli of this.clients) {
      console.log(cli);
      this.service.registerClient(form).subscribe((data : any) =>{
        console.log(data);
      },
      (error:any) => console.log(error));
    }
            alert("Register Success");
            this.service.setUserLoggedIn();
            this.router.navigate(['workerdisplay']);

    }

  }


