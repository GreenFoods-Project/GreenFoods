import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const videoElement = document.getElementById('video-bg') as HTMLVideoElement;
    if (videoElement) {
      videoElement.muted = true;
      videoElement.play().catch(error => {
        // Handle autoplay error (if any)
        console.error('Error playing video:', error);
      });
      videoElement.addEventListener('ended', () => {
        videoElement.play().catch(error => {
          console.error('Error replaying video:', error);
        });
      });
    }
  }

  goToClientComponent() {
    this.router.navigate(['/client']);
  }
}
