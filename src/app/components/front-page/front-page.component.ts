import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent {
  constructor(private router: Router) { }
  goToClientComponent() {
    this.router.navigate(['/clientHome']); // Navigate to the client component
  }
}
