import { Component, OnInit } from '@angular/core';
import {ModalModule,BsModalRef } from 'ngx-bootstrap';
import { LoginComponent } from '../login/login.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css']
})
export class FirstAppComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }
  showPoppup() {
    this.bsModalRef = this.modalService.show(LoginComponent);
    this.bsModalRef.content.title = 'Login Form';
  }
  ngOnInit() {
  }
}
