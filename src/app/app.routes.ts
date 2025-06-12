import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu/menu.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // SEM o AuthGuard
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
