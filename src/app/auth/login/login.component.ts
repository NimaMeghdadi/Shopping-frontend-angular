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
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  login: boolean;

  loginForm = this.formbuilder.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });
  errors = errorMessages;
  constructor(private router: Router, private gs: GlobalService , private formbuilder: FormBuilder) {}
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
    console.log("here")
    ApiRequest('POST')
      .controller('auth')
      .action('login')
      .setBody(param)
      .call(this.gs)
      .subscribe((resp) => {
        console.log(resp);
        if (resp.accessToken) this.router.navigate(['search/home']);
      },(error)=> { console.log("here 2") } );
  }
}
export const errorMessages: { [key: string]: string } = {
  name: 'write Name',
  category: 'Please choose at least ONE category',
  price: 'Write IT',
  amount: '1 2 ...'
};

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }

// }
