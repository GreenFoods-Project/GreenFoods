import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  isBottom = false;
  isDarkMode: boolean = true;
  pageOpen: number = 1;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  ngOnInit() {
    this.checkScroll();
    this.isDarkMode = localStorage.getItem("colorMode") == "dark";
    console.log(this.isDarkMode);

  }

  checkScroll() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    this.isBottom = (scrollTop + windowHeight >= windowHeight + 150);
  }
  changePageColor(color: string) {
    this.isDarkMode = color == "dark";
  }
  changePageOpen(pgNum: number) {
    this.pageOpen = pgNum;

  }
}
