import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    email: any;
    password: any;
   
    clients: any;

    constructor(private router: Router, private service: WorkerService) {
        this.email = "mh01@gmail.com";
        this.password = "12345678";
    }

    loginValidate(form: any):void {
        console.log(form.email);

        if (form.email == this.email && form.password == this.password) {
            alert("Login Success");
            this.service.setUserLoggedIn();
            this.router.navigate(['admin']);
        } 
       
        else {
            this.service.getClient(form).subscribe((data: any) => {
                this.clients = data;

               // const clientMatch = this.clients.find((cli: any) => cli.email === form.email && form.password === cli.password);

                if (this.clients !=null) {
                    console.log(this.clients);
                    alert("Welcome to Clients Home Page ");
                    this.service.setUserLoggedIn();
                    this.router.navigate(['workerdisplay']);
                } else {
                    alert("Invalid credentials ");
                   // (error:any) => console.log(error);
                    
                }
            });
            // this.service.getClient(form);
            // alert("Login Success");
            // this.service.setUserLoggedIn();
            // this.router.navigate(['workerdisplay']);
            
        }
    }
}
