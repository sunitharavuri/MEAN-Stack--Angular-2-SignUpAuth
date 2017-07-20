import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ValidateService } from '../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 username:String;
 password:String;


 constructor(private validateService: ValidateService,
   private flashMessage: FlashMessagesService,
   private authService: AuthService,
   private router: Router) { }

  ngOnInit() {
  }
  onSignInSubmit(){
    const user={
      username:this.username,
      password:this.password
    }
    this.authService.authenticateUser(user).subscribe(data=>{
      if(data.success){
        this.authService.storeUserData(data.token,data.user);
        this.flashMessage.show('you are signed in ', { cssClass: 'alert-success', timeout: 5000 });
        this.router.navigate(['list']);
      }else{
        this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
        this.router.navigate(['login']);
      }
    })
  }

}
