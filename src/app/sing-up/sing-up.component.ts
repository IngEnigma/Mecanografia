import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css'
})
export class SingUpComponent {
  constructor(private router: Router) { } 

  redirectToHome() {
    this.router.navigate(['/home']); 
  }
}
