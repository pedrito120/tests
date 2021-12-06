import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // user = {
  //   email: "",
  //   password:""
  // }
  email: any;
  password: any;

  constructor(private service: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  signup() {
    let user = {
      email: this.email,
      password: this.password
    }
    if (user.email == undefined && user.password == undefined || user.password == undefined || user.email == undefined) {
      alert("debe de ingresar correo y contraseña")
    } else {
      this.service.signup(user);
      console.log(user);
    }

  }
}
