import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateRequestDto } from 'src/app/dtos/authenticate/authenticate-request.dto';
import { AuthenticationService } from 'src/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  request: AuthenticateRequestDto;
  form: FormGroup;

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
    })

}  

ngOnInit(): void {
  }
  login() {
    this.request = Object.assign({}, this.form.value);
    
    this.authenticationService.authenticate(this.request).subscribe(
      success => this.router.navigate(['dashboard']),
      error => error,
    );
  }
}
