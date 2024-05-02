import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-workerprofile',
  templateUrl: './workerprofile.component.html',
  styleUrls: ['./workerprofile.component.css']
})
export class WorkerprofileComponent implements OnInit {
  profileData: any;
  workerEmail: string = '';
 
  
 

  constructor(private router: Router,private workerService: WorkerService) {}

  ngOnInit(): void {
    const workerEmail = localStorage.getItem('workerEmail');
    if (workerEmail) {
      this.workerEmail = workerEmail;
      this.getProfile();
    }
  }

  getProfile(): void {
    this.workerService.getWorkerByEmail(this.workerEmail)
      .subscribe(
        (worker) => {
          this.profileData = worker;
        },
        (error) => {
          console.error('Error fetching profile data:', error);
          // Optionally provide feedback to the user about the error
        }
      );
  }

  updateProfile(): void {
    this.workerService.updateWorker(this.profileData.workerId, this.profileData)
      .subscribe(
        (updatedProfile) => {
          this.profileData = updatedProfile;
          // Optionally provide feedback to the user that profile was updated
          console.log('Profile updated successfully.');
          alert("Profile updated successfully.");
          this.router.navigate(['workerhome']);
        },
        (error) => {
          console.error('Error updating profile:', error);
          // Optionally provide feedback to the user about the error
        }
      );
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // You can now upload the file to your server or perform any other action
      // For demonstration, you can log the file details to the console
      console.log('Selected file:', file);
      this.uploadImage(file);
      this.getProfile();
    }
  }
  // uploadImage(file: File) {
  //   const formData = new FormData();
  //   formData.append('image', file);
  
  //   // Assuming you have the workerId available in your component
    
  
  //   this.workerService.uploadImage(this.profileData.workerId, formData).subscribe(
  //     (response: any) => {
  //       console.log('Image uploaded successfully:', response);
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.error('Error uploading image:', error);
  //     }
  //   );
  // }
  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('image', file);
  
    this.workerService.uploadImage(this.profileData.workerId,formData).subscribe(
      (response: any) => {
        if (response instanceof HttpErrorResponse) {
          console.error('Error uploading image:', response);
        } else {
          console.log('Image uploaded successfully:', response);
          // Handle the success response as needed
          // this.workerService.getImage(this.profileData.workerId);
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error uploading image:', error);
      }
    );
  }
 
  
  
}
