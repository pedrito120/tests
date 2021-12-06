import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:any;
password:any;
  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }
  login(){
    this.service.login(this.email, this.password);
    console.log(this.email, this.password);
  }
}
