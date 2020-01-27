import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  //create variable
  selectedStudent: Student;

  constructor() { }

  ngOnInit() {
  }

  //create onSelection event
  onSelection(person: Student) {
    //set value to selectedStudent
    this.selectedStudent = person;
  }

}
