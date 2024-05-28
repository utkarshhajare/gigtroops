import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
// export interface Notification {
//     id: number;
//     title: string;
//     message: string;
//     timestamp: Date;
//     read: boolean;
//   }
export class NotificationComponent  {
//   notifications: Notification[] = [];
  
//   constructor(private notificationService: WorkerService) { }

//   ngOnInit(): void {
//     this.loadNotifications();
//   }

//   loadNotifications(): void {
//     this.notificationService.getNotifications()
//       .subscribe(notifications => {
//         this.notifications = notifications;
//       });
//   }

//   markAsRead(notification: Notification): void {
//     notification.read = true;
//     // Call your notification service to update the notification as read
//   }
}