import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //hard code student info into private studentData array of Student objects
  private studentData: Student[] = [
    {
      first: 'Frankie',
      last: 'Chavez',
      nick: 'Frank',
      hobby: 'Reading',
      slack: 'Edgedancer026'
    },
    {
      first: 'Brandon',
      last: 'Paniagua',
      nick: 'Bronson',
      hobby: 'Ecchi',
      slack: 'bpOilSpill'
    },
    {
      first: 'Zachary',
      last: 'Estrada',
      nick: 'Zac',
      hobby: 'Rocket League',
      slack: 'WindRunner'
    }
  ];

  //create cardData for cardData functions
  private cardData: Student = {
    first: 'Frankie',
    last: 'Chavez',
    nick: 'Frank',
    hobby: 'Reading',
    slack: 'Edgedancer026'
  };

  constructor() { }

  //create function that retrieves data from studentData
  getStudentData(): Student[] {
    return this.studentData;
  }

  //setCardData sends studentData from data.ts to studentClicked in list.ts
  setCardData(person: Student) {
    //save student data for card
    this.cardData = person;
  }

  getCardData(): Student {
    //retrieve student data for card
    return this.cardData;
  }
}
