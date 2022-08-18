import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;
  passwordError: boolean;

  constructor(
    public registerService: RegisterService
  ) {}

  ngOnInit() {
  }

  // register() {
  //   console.log(this.email);
  //   console.log(this.password);
  // }

  register() {
    const user = { email: this.email, password: this.password };
    this.registerService.register(user).subscribe(data => {
      console.log(data);
    });
  }

}
