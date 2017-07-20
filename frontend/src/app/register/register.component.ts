import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {ValidateService} from '../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name:String;
  username: String;
  email: String;
  password: String;
  


  constructor( private validateService :ValidateService,
               private flashMessage:FlashMessagesService,
               private authService: AuthService,
               private router:Router){}
  ngOnInit() {
  }
  onRegisterSubmit(){
    
    const user={
      name:this.name,
      username:this.username,
      email:this.email,
      password:this.password

    }
    if (!this.validateService.validateRegister(user)){
    this.flashMessage.show('PLease fill in all fields',{cssClass: 'alert - danger',timeout:3000});
     return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
     
      this.flashMessage.show('Please enter valid email', { cssClass: 'alert - danger', timeout: 3000 });
      return false;
   
  } 
    this.authService.registerUser(user).subscribe(data=>{
if(data.success){
  this.flashMessage.show('You are now registered and can login', { cssClass: 'alert - success', timeout: 3000 });
   this.router.navigate(['/sign-in'])
}else{
  this.flashMessage.show('Oops!!..something went wrong', { cssClass: 'alert - danger', timeout: 3000 });
  this.router.navigate(['/register'])
}
 });
 }
}


