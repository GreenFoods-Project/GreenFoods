import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const videoElement = document.getElementById('video-bg') as HTMLVideoElement;
    if (videoElement) {
      videoElement.muted = true;

      videoElement.play().catch(error => {
        console.error('Error playing video:', error);
      });
      videoElement.addEventListener('ended', () => {
        videoElement.play().catch(error => {
          console.error('Error replaying video:', error);
        });
      });
    }
  }
}
