import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// http://localhost:4200
const routes: Routes = [                              // -> Path        Page
  { path: '', component: HomeComponent },             // -> /           Home Page     http://localhost:4200/
  { path: 'login', component: LoginComponent },       // -> /login      Login Page    http://localhost:4200/login
  { path: 'register', component: RegisterComponent }, // -> /register   Register Page http://localhost:4200/register
  { // Define ruta de modulo usando LazyLoad (Carga Perezosa)
    path: 'dashboard',
    loadChildren: () => import( './protected/protected.module' )
                            .then( ( module ) => module.ProtectedModule )
  },
  { path: '**', redirectTo: ''  }                     // -> /hola       Home Page     http://localhost:4200/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
