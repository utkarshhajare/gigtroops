import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  isUserLoggedIn : boolean;
  constructor(private http:HttpClient) {
    this.isUserLoggedIn = false;
   }
   setUserLoggedIn(){
    this.isUserLoggedIn = true;
   }
   getUserLoggedStatus(): boolean {
    return this.isUserLoggedIn;
  }
   setUserLogout(){
    this.isUserLoggedIn = false;
   }
  getAllWorkers() : any{
    return this.http.get('http://localhost:8080/getAllWorkers')
  }
  getAllClients() : any{
    return this.http.get('http://localhost:8080/getAllClients')
  }
  getWorker(form: any): any {
    return this.http.get('http://localhost:8080/workerlogin/' + form.email + "/" + form.password);
}
getClient(form: any): any {
  return this.http.get('http://localhost:8080/login/' + form.email + "/" + form.password);
}
registerClient(cli : any) : any{
  return this.http.post('http://localhost:8080/register',cli);
}
registerWorker(wor : any) : any{
  return this.http.post('http://localhost:8080/registerWorker',wor);
}
deleteWorker(worId: any): any {
  console.log(worId);
  return this.http.delete('http://localhost:8080/deleteWorker/' + worId);
}
}
