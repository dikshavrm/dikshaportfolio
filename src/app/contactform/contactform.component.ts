import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormControl} from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { first } from 'rxjs/operators';
import { Users } from '../users';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit{

  
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {

  this.angForm = this.fb.group({
    name: ['', [Validators.required,Validators.minLength(1)]],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    message_subject: ['', Validators.required],
    message: ['', Validators.required],

    });
    }
   
  // password(formGroup: FormGroup) {
  //   const { value: password } = formGroup.get('password');
  //   const { value: cpassword } = formGroup.get('cpassword');
  //   return password === cpassword ? null : { passwordNotMatch: true };
  // }
  ngOnInit() {
    
  }
  postdata(angForm1)
  {
    this.dataService.contact(angForm1.value.name, angForm1.value.email, angForm1.value.phone, angForm1.value.message_subject, angForm1.value.message)
      .pipe(first())
      .subscribe(
        
          error => {

            alert('error');
          },
          data => {

            alert('You are successfully registerd!');
            this.router.navigate(['home']);
        });
  }
  get name() { return this.angForm.get('name'); }
  get email() { return this.angForm.get('email'); }
  get phone() { return this.angForm.get('phone'); }
  get message_subject() { return this.angForm.get('message_subject'); }
  get message() { return this.angForm.get('message'); }

  // get password() { return this.angForm.get('password'); }
 
}
  // angForm: FormGroup;
  
  // firstName:string='';
  // lastName:string='';
  // // email:string='';
  // // gender:string='';
  // // password:string='';
  // // Cpassword:string='';
  // // IsAccepted:number=0;


  // constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router){

  //   this.angForm = fb.group({

  //     firstname:new FormControl(),
  //     lastname:new FormControl(),
  //     // email:new FormControl(),
  //     // gender:new FormControl(),
  //     // password:new FormControl(),
  //     'firstName':[null, Validators.required],
  //     'lastName':[null, Validators.required],
  //     'email':[null, Validators.required],
  //     'gender':[null, Validators.required],
  //     'password':[null, Validators.required],
  //     // 'Cpassword':[null, Validators.compose([Validators.required, Validators.email])],
  //     // 'IsAccepted':[null]
  //   });
  //  }

  // //  onChange(event:any){
  // //    if(event.checked == true){
  // //      this.IsAccepted = 1;
  // //    }else{
  // //      this.IsAccepted=0;
  // //    }
  // //  }

  // //  onFormSubmit(form:NgForm){
  // //    console.log(form);
  // //  }

  // ngOnInit(): void {
  // }

  //     postdata(angForm1)
  //     {
  //     this.dataService.userregistration(angForm1.value.firstname, angForm1.value.lastname, angForm1.value.email, angForm1.value.gender, angForm1.value.password)
  //     .pipe(first())
  //     .subscribe(
  //     data => {
  //     this.router.navigate(['login']);
  //     },

  //     error => {
  //     });
  //     }
  //     get firstname() { return this.angForm.get('firstname'); }
  //     get lastname() { return this.angForm.get('lastname'); }
  //     get email() { return this.angForm.get('email'); }
  //     get gender() { return this.angForm.get('gender'); }
  //     get password() { return this.angForm.get('password'); }
      
     
      


