import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '' ;
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    this.auth.login(  this.email,  this.password ).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/clients']);
      },
      error: (err) => (this.error = 'Invalid credentials'),
    });
  }
}
