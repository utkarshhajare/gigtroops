import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
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
  private apiUrl = '/api/notifications';
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
getWorkerByEmail(workerEmail: String): Observable<any> {
  return this.http.get<any>(`http://localhost:8080/getWorkerByEmail/${workerEmail}`);
}
getClientByEmail(clientEmail: String): Observable<any> {
  return this.http.get<any>(`http://localhost:8080/getClientByEmail/${clientEmail}`);
}
updateWorker(workerId: number, profileData: any): Observable<any> {
  return this.http.put<any>(`http://localhost:8080/update/${workerId}`, profileData);
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
  return this.http.get<WorkRequest[]>(`http://localhost:8080/${workerId}/requests`);
}
getRespondedWorkRequests(workerId: number): Observable<WorkRequest[]> {
  return this.http.get<WorkRequest[]>(`http://localhost:8080/${workerId}/respondedRequests`);
}
acceptRequest(requestId: number): Observable<void> {
  return this.http.put<void>(`http://localhost:8080/requests/${requestId}/accept`, {});
}

denyRequest(requestId: number): Observable<void> {
  return this.http.put<void>(`http://localhost:8080/requests/${requestId}/deny`, {});
}
uploadImage(workerId: number,formData: FormData): Observable<any> {
  return this.http.post<any>(`http://localhost:8080/uploadImage/${workerId}`, formData);
}
getImage(workerId: number): Observable<any> {
  return this.http.get<any>(`http://localhost:8080/${workerId}/image`);
}


getClientNotifications(clientId: number): Observable<any[]> {
  return this.http.get<any[]>(`http://localhost:8080/client/${clientId}/notifications`);
}

markAsRead(workRequestId: number): Observable<any> {
  return this.http.put(`http://localhost:8080/${workRequestId}/markAsRead`, {});
}
}
