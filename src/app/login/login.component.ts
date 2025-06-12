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

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const data = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:8080/insert', data)
      .subscribe({
        next: (res) => {
          // Sucesso - salva o token e redireciona
          //localStorage.setItem('token', res.data?.token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.error = err.error?.message || 'Erro ao fazer login';
        }
      });
  }
}
