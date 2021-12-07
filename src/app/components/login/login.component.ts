import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';
import validation from './validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    Password: new FormControl(''),
    confirmPasword: new FormControl('')
  });

  submitted = false;

  constructor(private formbuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.form = this.formbuilder.group(
      {
        email:['',
          [
            Validators.required,
            Validators.email
          ]
        ],
        password:['',
          [
            Validators.required,
            Validators.minLength(8)
          ]
        ],
        confirmPassword:['',
            Validators.required
        ]

      },
      {
        validators: [validation.match('password', 'confirmPassword')]
      });
  }

  get l(): {[key: string]: AbstractControl}{
    return this.form.controls;
  }

  onSubmit(): void{
    this.submitted= true; 

    if(this.form.invalid){
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));

    alert("Usuario " + this.form.value.email + " autenticado");
    this.form.reset();
    this.submitted = false;

    this.router.navigateByUrl('/app-principal');
  }


}
