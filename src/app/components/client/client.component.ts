import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  isBottom = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  ngOnInit() {
    this.checkScroll();
  }

  checkScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    this.isBottom = (scrollTop + windowHeight >= windowHeight + 150);
  }
}
