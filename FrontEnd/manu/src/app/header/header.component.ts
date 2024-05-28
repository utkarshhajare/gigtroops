import { Component, OnInit } from '@angular/core';

import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  loginStatus: any;
  notifications: any[] = [];
  notificationCount: number = 0;
  clientId: number = 0;

   constructor(private service : WorkerService){

   }
   ngOnInit(): void {
    this.service.getUserLoggedStatus().subscribe((loginStatusData: any) => {
      this.loginStatus = loginStatusData;
    });
    const clientDataString = localStorage.getItem('clientData');
    if (clientDataString) {
      const clientData = JSON.parse(clientDataString);
      this.clientId = clientData.id;
      this.loadNotifications();
    }
   
  }
   loadNotifications(): void {
      this.service.getClientNotifications(this.clientId)
        .subscribe(notifications => {
          // this.notifications = notifications;
          // this.markNotificationsAsRead();
          this.notifications = notifications.sort((a, b) => b.timestamp - a.timestamp);
          const unreadNotifications = notifications.filter(notification => !notification.read);
          this.notificationCount = unreadNotifications.length;
          this.notifications = notifications;
        });
      }
      markNotificationsAsRead(): void {
        this.notifications.forEach(notification => {
          if (!notification.isRead) {
            this.service.markAsRead(notification.id).subscribe();
            notification.isRead = true;  // Update the local state
          }
        });
      }
   }
   
// export class HeaderComponent implements OnInit {
//   isLoggedIn: boolean = false; // Default to false until we fetch the actual login status

//   constructor(private service: WorkerService) {}

//   ngOnInit(): void {
//     this.service.getUserLoggedStatus().subscribe((loginStatusData: boolean) => {
//       this.isLoggedIn = loginStatusData;
//     });
//   }
// }




