import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  colorMode: string = "";
  @Output() toggleColorMode = new EventEmitter();
  ngOnInit(): void {
    (localStorage.getItem("colorMode") == "dark") ? this.colorMode = "dark" : this.colorMode = "light"
    localStorage.setItem("colorMode", `${this.colorMode}`)
  }
  changeColorMode() {
    (this.colorMode == "dark") ? this.colorMode = "light" : this.colorMode = "dark";
    localStorage.setItem("colorMode", `${this.colorMode}`)
    this.toggleColorMode.emit(this.colorMode);

  }
}
