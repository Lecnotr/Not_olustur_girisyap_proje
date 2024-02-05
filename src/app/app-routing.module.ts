import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { NotkComponent } from './components/notk/notk.component';
import { NotlistComponent } from './components/notlist/notlist.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home', component: HomeComponent, children:[
      {path: 'home', component: NotkComponent}
    
    ],
    canActivate: [authGuard]
  },
  {
    path: 'nlist',
    component: NotlistComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//linkler bu sayfadan ayarlanıyor router/ kelime anlamıyla anımsa.