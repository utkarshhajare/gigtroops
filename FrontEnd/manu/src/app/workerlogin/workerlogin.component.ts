import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WorkerService } from '../worker.service';


@Component({
    selector: 'app-workerlogin',
    templateUrl: './workerlogin.component.html',
    styleUrls: ['./workerlogin.component.css']
})
export class WorkerLoginComponent {
    email: any;
    password: any;
    workers: any;
   

    constructor(private router: Router, private service: WorkerService,private tost: ToastrService) {
        this.email = "mh01@gmail.com";
        this.password = "12345678";
    }

    workerLoginValidate(worForm: any) {
        console.log(worForm.email);

        if (worForm.email == this.email && worForm.password == this.password) {
            alert("Login Success");
            // this.tost.success('Worker login successfully!', 'Success', {
            //     positionClass: 'toast-top-right', // Adjust position to top-right
            //     progressBar: true, // Show progress bar
            //     closeButton: true, // Show close button
            //     timeOut: 3000, // Duration in milliseconds
            //     extendedTimeOut: 1000, // Additional duration for mouse hover
            //     //tapToDismiss: false, // Disable dismiss on click
            //     toastClass: 'toast toast-success' // Add custom CSS class
            // });
            this.service.setUserLoggedIn();
            this.router.navigate(['admin']);
        } 
        else{
            this.service.getWorker(worForm).subscribe((data: any) => {
                this.workers = data;

               // const clientMatch = this.clients.find((cli: any) => cli.email === form.email && form.password === cli.password);

                if (this.workers !=null) {
                    console.log(this.workers);
                    
                    alert("Welcome to Workers Home Page ");
                    this.service.setUserLoggedIn();
                    localStorage.setItem('workerEmail', worForm.email);
                    localStorage.setItem('workerData', JSON.stringify(this.workers));
                    this.router.navigate(['workerhome']);
                } else {
                    alert("Invalid credentials ");
                   // (error:any) => console.log(error);
                    
                }
            });
        }
       
    }
}
