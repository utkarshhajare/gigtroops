import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-workerregister',
  templateUrl: './workerregister.component.html',
  styleUrl: './workerregister.component.css'
})
export class WorkerRegisterComponent {
  workers : any[]=[];
 
  constructor(private service : WorkerService,private router: Router) {
   
   
  }
 

  registerWorker( formData : any ) {
    console.log('before push:');

    for (let wor of this.workers) {
      console.log(wor);
    }
    // add the new object to workers array
    this.workers.push( formData );

    console.log('after push:');
    for (let wor of this.workers) {
      console.log(wor);
      this.service.registerWorker(formData).subscribe((data : any) =>{
        console.log(data);
      },
      (error:any) => console.log(error));
    }
            alert("Register Success");
            this.service.setUserLoggedIn();
            this.router.navigate(['workerdisplay']);

    }
  }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { WorkerService } from '../worker.service';
// import { ToastrService } from 'ngx-toastr'; // Import ToastrService

// @Component({
//   selector: 'app-workerregister',
//   templateUrl: './workerregister.component.html',
//   styleUrls: ['./workerregister.component.css']
// })
// export class WorkerRegisterComponent {
//   workers: any[] = [];
//   confirmPassword: string = ''; // Add confirm password field

//   constructor(
//     private service: WorkerService,
//     private router: Router,
//     private toastr: ToastrService // Inject ToastrService
//   ) {}

//   registerWorker(formData: any) {
//     if (formData.password !== this.confirmPassword) {
//       this.toastr.error('Passwords do not match', 'Error');
//       return;
//     }
   
//     this.service.registerWorker(formData).subscribe(
//       (data: any) => {
//         console.log(data);
//         this.toastr.success('Registration Success', 'Success');
//         this.service.setUserLoggedIn();
//         this.router.navigate(['workerdisplay']);
//       },
//       (error: any) => {
//         console.log(error);
//         this.toastr.error('Registration Failed', 'Error');
//       }
//     );
//   }
// }

  
