import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { FirstAppComponent } from './first-app/first-app.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import {ModalModule,BsModalRef } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [ AppComponent, FirstAppComponent, LoginComponent ],
  imports: [ BrowserModule,ModalModule.forRoot(),AppRoutingModule],
  providers: [BsModalService],
  bootstrap: [AppComponent],
  entryComponents: [FirstAppComponent,LoginComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
