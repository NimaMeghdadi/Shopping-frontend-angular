import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { ParamsHandler } from 'src/app/core/params-handler';
import { GlobalService } from 'src/app/core/services/global.service';
import { ApiRequest } from 'src/app/core/services/request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  login: boolean;

  constructor(private router: Router, private gs: GlobalService) {}
  ngOnInit(): void {}

  usernameFormController = new FormControl('', [Validators.required]);

  //  matcher = new MyErrorStateMatcher();

  loginReq() {
    let params = new ParamsHandler();
    params.addParam('username', this.username);
    params.addParam('password', this.password);
    this.isUserAndPassValid(params);
  }

  isUserAndPassValid(param: ParamsHandler) {
    ApiRequest('POST')
      .controller('auth')
      .action('login')
      .setBody(param)
      .call(this.gs)
      .subscribe((resp) => {
        console.log(resp);
        if (resp.accessToken) this.router.navigate(['search/home']);
      });
  }
}

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }

// }
