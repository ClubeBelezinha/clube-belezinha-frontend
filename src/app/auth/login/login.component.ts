import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  @HostListener('window:resize', ['$event']) onResize(event: {
    target: { innerHeight: any };
  }) {
    if (document.body.scrollHeight > window.innerHeight) {
      const divElement = document.querySelector(
        '.container-fluid'
      ) as HTMLElement;
      if (divElement)
        divElement.style.height = `${document.body.scrollHeight}px`;
    } else {
      const divElement = document.querySelector(
        '.container-fluid'
      ) as HTMLElement;
      if (divElement) divElement.style.height = `100vh`;
    }
  }
  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  ngAfterViewInit(): void {
    
    console.log(document.body.scrollHeight,window.innerHeight);
    const divElement = document.querySelector(
      '.container-fluid'
    ) as HTMLElement;
    
    if (document.body.scrollHeight > window.innerHeight) {
      if (divElement)
        divElement.style.height = `100%`;
    }else{
      if (divElement && window.innerHeight>550) divElement.style.height = `100vh`;
    }
  }
  onSubmit() {
    console.log(this.form.value);
    this.router.navigate(['logged/dashboard']);
  }
}
