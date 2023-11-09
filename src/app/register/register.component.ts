import { Component, OnInit } from '@angular/core';
import { states } from '../shared/store/state-data-store';
import { State } from '../shared/models/state.model';
import { divisions } from '../shared/store/division-dtata-store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  public states: State[] = State.sortByName(states);
  public divisions:any=divisions;

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phoneNumber: new FormControl(''),
    dateOfBirth: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    state: new FormControl(''),
    division: new FormControl('')
  });

  
  constructor( private fB:FormBuilder){
  }

  ngOnInit(): void {
    this.registerForm = this.fB.group({
      firstName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      phoneNumber : ['',[Validators.minLength(8),Validators.maxLength(13),Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      password : ['',[Validators.minLength(8),Validators.required]],
      confirmPassword : ['',[Validators.required]],
      state: ['', [Validators.required]],
      division: ['', [Validators.required]]
    });
  }


  createAccount(registerFormValue:any): void {
    if (registerFormValue.valid) {
      const formData = this.registerForm.value;
      // Perform your account creation logic with the form data
      console.log('Form data:', formData);
    }
  }
  

}
