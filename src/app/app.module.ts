import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'app-principal', component: PrincipalComponent
  },
  {
    path:'app-form', component: FormComponent
  },
  {
    path:'app-car', component: CarComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    FormComponent,
    LoginComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
