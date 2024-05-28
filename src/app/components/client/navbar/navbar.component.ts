import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  colorMode: string = "";
  pageOpen: number = 1;
  @Output() toggleColorMode = new EventEmitter();
  @Output() changePgOpen = new EventEmitter();
  ngOnInit(): void {
    this.pageOpen = 1;
    (localStorage.getItem("colorMode") == "dark") ? this.colorMode = "dark" : this.colorMode = "light"
    localStorage.setItem("colorMode", `${this.colorMode}`)
  }
  changeColorMode() {
    (this.colorMode == "dark") ? this.colorMode = "light" : this.colorMode = "dark";
    localStorage.setItem("colorMode", `${this.colorMode}`)
    this.toggleColorMode.emit(this.colorMode);

  }
  changePageOpen(pgNum: number) {
    this.pageOpen = pgNum;
    this.changePgOpen.emit(pgNum);
  }
}
