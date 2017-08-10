import { NgModule } from '@angular/core';
import { RouterModule, Router} from '@angular/router';
import { FirstAppComponent } from './first-app/first-app.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES = [
  { path:'', redirectTo:'first-app', pathMatch:'full' },
  { path:'first-app', component:FirstAppComponent },
  {path:'login-app', component: LoginComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(APP_ROUTES, {useHash: true})],
  exports:[RouterModule],
  providers:[]
})
export class AppRoutingModule { }
