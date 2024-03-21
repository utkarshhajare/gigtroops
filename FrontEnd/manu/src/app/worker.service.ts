import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
interface WorkRequest {
  id: number;
  status: string;
  // Other properties of WorkRequest
}

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  isUserLoggedIn : boolean;
  loginStatus: Subject<any>; 
  constructor(private http:HttpClient) {
    this.isUserLoggedIn = false;
    this.loginStatus = new Subject(); 
   }
   setUserLoggedIn(){
    this.isUserLoggedIn = true;
    this.loginStatus.next(true);
   }
   getUserLoggedStatus(): any {
    return this.loginStatus.asObservable();
  }
  // getLoginStatus(): any {
  //   return this.loginStatus.asObservable();    // new code
  // }this.isUserLoggedIn;
   setUserLogout(){
    this.isUserLoggedIn = false;
    this.loginStatus.next(false);
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
// getWorkerById(): any {
//   return this.http.get('http://localhost:8080/getWorkerById/' + workerId);
// }
getWorkerById(workerId: number): Observable<any> {
  return this.http.get<any>(`http://localhost:8080/getWorkerById/${workerId}`);
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
getWorkerRequests(workerId: number): Observable<WorkRequest[]> {
  return this.http.get<WorkRequest[]>(`http://localhost:8080/workers/${workerId}/requests`);
}

acceptRequest(requestId: number): Observable<void> {
  return this.http.put<void>(`http://localhost:8080/workers/requests/${requestId}/accept`, {});
}

denyRequest(requestId: number): Observable<void> {
  return this.http.put<void>(`http://localhost:8080/workers/requests/${requestId}/deny`, {});
}
}
