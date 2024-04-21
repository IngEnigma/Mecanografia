import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SingUpComponent } from './sing-up/sing-up.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'sing-up', component: SingUpComponent },
    { path: 'landing-page', component: LandingPageComponent}
];
