import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email: any, password: any) {
    //declaramos user para guardar todo el arreglo
    let user = [];
    //mandamos a llamar desde localstorage users donde se encuentran todos los usurarios
    let users = localStorage.getItem("users");
    //realizamos un if para verificar si users esta vacio o no y se la asignamos a user
    if (users) {
      user = JSON.parse(users);
    }
    //creamos un filtro para verificar que el usuraio exista 
    const r = user.filter((r: any) => r.email == email && r.password == password);
    //creamos una condicion en donde nos diga que si existe el usuario realizamos el logueo en caso contrario mandamos una alerta que diga que el usuario no existe
    if (r.length == 0) {
      alert("el usuario no existe");
    } else {
      sessionStorage.setItem("logueado", "true");
      setTimeout(() => {                           // <<<---using ()=> syntax
        this.router.navigate(["/home"]);
      }, 3000);

    }
  }
  signup(usernow: any) {
    //declaramos user para guardar todo el arreglo
    let user = [];
    //mandamos a llamar desde localstorage users donde se encuentran todos los usurarios
    let users = localStorage.getItem("users");
    //realizamos un if para verificar si users esta vacio o no y se la asignamos a user
    if (users) {
      user = JSON.parse(users);
    }
    //creamos un filtro para buscar al usuario 
    const r = user.filter((r: any) => r.email == usernow.email && r.password == usernow.password);
    //creamos una condicion en donde nos diga que si no existe el usuario se realizar el registro en dado contrario mandamos una alerta en donde diga que existe    
    if (r.length == 0) {
      user.push(usernow);
      localStorage.setItem("users", JSON.stringify(user));
      this.router.navigateByUrl("/login");
      alert("Se ha registrado un nuevi usuario")
    } else {
      alert("El usuario que ingreso ya esta registrado");
    }
  }
  //realizamos la limpieza de session para simular un cierre de sesion
  signout() {
    sessionStorage.clear();
    this.router.navigate(["/home"]);
    window.location.reload();
  }

}
