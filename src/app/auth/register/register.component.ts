import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  confirmPassword = ''; // added confirm password
  message = '';

  constructor(private auth: AuthService, private router: Router) { }

  onRegister() {
    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match!';
      return;
    }

    let obj = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }

    this.auth.register(obj).subscribe({
      next: () => {
        this.message = 'Registration successful! Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 2000);
      },
      error: (err) => {
        this.message = err.error?.message || 'Registration failed';
      }
    });
  }
}
