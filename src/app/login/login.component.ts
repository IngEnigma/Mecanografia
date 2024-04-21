import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserService) { } 

  email: string = "Nayeli@Miamor.com";
  password: string = "N260523r";

  callLogin() {
    
    this.userService.postLogin(this.email, this.password);

  }

}
