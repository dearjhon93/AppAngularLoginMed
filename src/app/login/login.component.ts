import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CookiesService } from '../cookies/cookies.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  email: string;
  password: string;
  cookieValue: string

  constructor(
    public loginService: LoginService,
    private cokkie: CookiesService,
    public router: Router
  ) {
  }

  // login() {
  //   console.log(this.email);
  //   console.log(this.password);
  // }
  login() {
    const user = {email: this.email, password: this.password};
    this.loginService.login(user).subscribe( data => {
      // alert("TOKEN: "+data.token);

      alert("Bienvenido .!!")
      // Swal.fire(
      //   'Good job!',
      //   'You clicked the button!',
      //   'success'
      // )


      this.cokkie.setCookie(data.token);

      console.log(this.cokkie.getCookie("token"))

      
      //Luego de agregar a cookies, valida token... dirige a home
      this.router.navigateByUrl('/home');
    },
    error => {
      console.log(error);

      alert("Ops, credenciales incorrectas")
      // Swal.fire(
      //   'Oops!',
      //   'Credenciales incorrectas!',
      //   'error'
      // )
    });
  }

  ngOnInit() {
  }

}
