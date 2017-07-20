import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ValidateService} from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ChallengeService } from './services/challenge.service';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { SingleListComponent } from './list/single-list/single-list.component';
import { AddChallengeComponent } from './list/add-challenge/add-challenge.component';
import { EditChallengeComponent } from './list/edit-challenge/edit-challenge.component';

const appRoutes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'list', component: ListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'list',
    component: ListComponent,
    children: [
      {
        path: 'singlelist',
        component: SingleListComponent
      }
    ]
  },
  { path: 'add-challenge', component: AddChallengeComponent },
  { path: 'edit-challenge', component: EditChallengeComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
   
    AboutComponent,
   
    ListComponent,
   
    HomeComponent,
   
    RegisterComponent,
   
    SignInComponent,
   
    ProfileComponent,
   
    SingleListComponent,
   
    AddChallengeComponent,
   
    EditChallengeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FlashMessagesModule,
    Ng2DatetimePickerModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ValidateService, AuthService,ChallengeService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
