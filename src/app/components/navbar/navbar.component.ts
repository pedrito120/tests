import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isloggedNow = true;
  colorsecundario: string;
  constructor(private service: AuthService, private router: Router) {
    this.colorsecundario = "";
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.islogged();
    }, 3000);
  }
  ngDoCheck() {
    setTimeout(() => {
      this.islogged();
      console.log(true);
    }, 3000);
  }

  login() {
    this.router.navigate(["/login"]);
  }
  signout() {
    this.service.signout();

  }
  async islogged() {
    let logged = await sessionStorage.getItem("logueado");
    if (logged) {
      this.isloggedNow = true;
    } else {
      this.isloggedNow = false;
    }
  }
  changeColor() {
    //para cambiar el color del componente se debe realizar un id desde el router outlet
    let body: any = document.getElementById("body");
    body.style.backgroundColor = this.colorsecundario;
  }
  home() {
    this.router.navigate(["/home"]);
  }
  favorites() {
    this.router.navigate(["/favorites"]);
  }
}
