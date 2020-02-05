import { Component, OnInit } from '@angular/core';
import { DataaService } from '../services/dataa.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private ds: DataaService) { }

  ngOnInit() {
  }

  //access login in service
  logIn(userName: string, password: string) {
    //compare password stored in service
    if(this.ds.checkCred(userName, password)) {
      alert('You are logged in');
    } else {
      alert('Try Again');
    }
  }
}
