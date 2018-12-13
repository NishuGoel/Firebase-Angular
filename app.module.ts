import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppFirebaseModule } from './app-firebase/app-firebase.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, SignupComponent
  ],
  imports: [
    BrowserModule, AppFirebaseModule, ReactiveFormsModule,
    
    RouterModule.forRoot([
    {
      path: 'login',
      component: LoginComponent
    },  
    {
      path: 'signup',
      component: SignupComponent
    }  
    ]
    ),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
