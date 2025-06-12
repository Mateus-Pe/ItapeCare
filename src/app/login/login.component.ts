import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  loading = false;

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    this.loading = true;
    this.error = '';

    const data = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:8080/login', data)
      .subscribe({
        next: (res) => {
          console.log('Login success:', res);
          if (res && res.success === true) {
          console.log('Login OK, redirecionando...');
          this.router.navigate(['/home']);
        } else {
          console.log('Login falhou:', res);
          this.error = res.message || 'Credenciais inválidas';
        }
        this.loading = false;
        },
        error: (err) => {
          console.error('Login error:', err); // <- Para debug
          this.error = err.error?.message || 'Erro ao fazer login';
          this.loading = false;
        }
      });
  }
}
