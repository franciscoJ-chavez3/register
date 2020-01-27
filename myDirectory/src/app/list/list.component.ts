import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Student } from '../interfaces/student';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  //create array of type Student
  students: Student[] = [];

  @Output() selectedStudent = new EventEmitter();

  constructor(private dataService: DataService) {
    this.students = dataService.getStudentData();
  }

  ngOnInit() {
  }

  //click event in list component
  studentClicked(person: Student) {
    //studentClicked sets Card Data of student from dataService
    //this.dataService.setCardData(person);
    this.selectedStudent.emit(person);
  }

}
