import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
/* import Validation from ''; */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  /* Create the forms controls for each input */
  form: FormGroup = new FormGroup({
    productName: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl('')
  });

  /* Create atribute boolean with false for button function */
  /* The submit function of button is assigned with false */
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    /* Create validators for inputs */
    this.form = this.formBuilder.group(
      {
        productName:['', Validators.required],
        stock:[
          '',
          [
            Validators.required,
            Validators.minLength(1)
          ]
        ],
        price:[
          '',
          [
            Validators.required,
            Validators.minLength(1)
          ]
        ]
      }
      /* validattors: [Validators.match('passwords')] */
    );

  }

  /* Function for gett forms controls */
  get f(): {[key: string]: AbstractControl}{
    return this.form.controls;
  }

  /* Function for button on submit */
  onSubmit(): void{

    this.submitted = true;

    if(this.form.invalid){
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));

    alert("Se registro " + this.form.value.productName + " correctamente");

    this.form.reset();
    this.submitted = false;
  }

  /* Function for reset values */
  /* onReset(): void{
    this.submitted = false;
    this.form.reset;
  } */
}
