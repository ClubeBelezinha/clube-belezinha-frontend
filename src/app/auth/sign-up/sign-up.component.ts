import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterRequestResponseDto } from 'src/app/dtos/user/user-register-request-response.dto';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  request: UserRegisterRequestResponseDto;
  form: FormGroup;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      cpf: ['', [Validators.required]],
      nickname: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      customSwitch1: new FormControl(false, [Validators.requiredTrue]),
    })
  }
  
  ngOnInit(): void {

  }
 
  register() {
    console.log(this.form.value);
    if (!this.form.valid) {
      console.log("Formulário inválido");
      return;
    } else {
      let pass = this.form.get('password').value;
      let confirmPass = this.form.get('confirmPassword').value
      if(pass == confirmPass && pass && confirmPass){
        this.request = Object.assign({}, this.form.value);
        this.userService.register(this.request).subscribe(
          success => {
            this.router.navigate(['']);
          },
          error => console.log(error)
        );
      }else{
        alert("Senhas diferentes!");
        
        return
      }
     
    }


  }
}
