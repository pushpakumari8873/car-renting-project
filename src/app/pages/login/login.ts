import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  router = inject(Router);

  loginObj: any = {
    userName: '',
    password: ''
  }

  onLogin() {
    if (this.loginObj.userName == 'admin' && this.loginObj.password == "112233") {
      alert("Login Success");
      this.router.navigate(['/dashboard']);

    }
    else {
      alert("Login Failed")
    }
  }
}
