import { Injectable, OnInit } from '@angular/core';

import {Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  }

) export class InfoService {

  employees= [
    { firstName: 'ashok',id: 1, age: 25, phone: '1234567890', address: 'KHLADSHFJ' },
    { firstName: 'max',id: 2, age: 5, phone: '1234567890', address: 'KHLADSHFJ' },
    { firstName: 'raj', id: 3, age: 10, phone: '9876543210', address: 'ASDFJHDSF' },
    { firstName: 'ashwini', id: 4, age: 4005, phone: '5555555555', address: 'jkhDASFASD' },
    { firstName: 'Michael', id: 5, age: 35, phone: '5678901234', address: 'KFHASLDHF' },
    { firstName: 'Jessica', id: 6, age: 27, phone: '6789012345', address: 'KJHASKJFH' },
    { firstName: 'David', id: 7, age: 29, phone: '7890123456', address: 'KJASHDKFJ' },
    { firstName: 'Jennifer', id: 8, age: 32, phone: '8901234567', address: 'AKJSHDFJK' },
    { firstName: 'Daniel', id: 9, age: 26, phone: '9012345678', address: 'KASJDFHAK' },
    { firstName: 'Emma', id: 10, age: 31, phone: '0123456789', address: 'AJSHDFKJA' },
    { firstName: 'James', id: 11, age: 33, phone: '9876543210', address: 'KASDFHJKS' },
    { firstName: 'Olivia', id: 12, age: 29, phone: '8765432109', address: 'ASDJFHAKJ' },
    { firstName: 'Matthew', id: 13, age: 27, phone: '7654321098', address: 'KAJSHDFKA' },
    { firstName: 'Ava', id: 14, age: 30, phone: '6543210987', address: 'AKJSHDKAF' },
    { firstName: 'William', id: 15, age: 34, phone: '5432109876', address: 'AKJSHDFKJ' },
    { firstName: 'Sophia', id: 16, age: 25, phone: '4321098765', address: 'KJASHDKFJ' },
    { firstName: 'Ethan', id: 17, age: 28, phone: '3210987654', address: 'ASKDJHFKA' },
    { firstName: 'Isabella', id: 18, age: 31, phone: '2109876543', address: 'AKSDFJKAS' },
    { firstName: 'Alexander', id: 19, age: 26, phone: '1098765432', address: 'AKJSDHFKA' },
    { firstName: 'Mia', id: 20, age: 29, phone: '0987654321', address: 'AKJSHDFKA' },
    { firstName: 'Benjamin', id: 21, age: 32, phone: '9876543210', address: 'AKJSHDFKA' },
    { firstName: 'Charlotte', id: 22, age: 27, phone: '8765432109', address: 'AKJSHDFKA' },
    { firstName: 'Jacob', id: 23, age: 30, phone: '7654321098', address: 'AKJSHDFKA' },
    { firstName: 'Amelia', id: 24, age: 33, phone: '6543210987', address: 'AKJSHDFKA' },
    { firstName: 'William', id: 25, age: 28, phone: '5432109876', address: 'AKJSHDFKA' },
    { firstName: 'Daniel', id: 26, age: 31, phone: '4321098765', address: 'AKJSHDFKA' },
    { firstName: 'Liam', id: 27, age: 26, phone: '3210987654', address: 'AKJSHDFKA' },
    { firstName: 'Evelyn', id: 28, age: 29, phone: '2109876543', address: 'AKJSHDFKA' },
    { firstName: 'Alexander', id: 29, age: 32, phone: '1098765432', address: 'AKJSHDFKA' },
    { firstName: 'Harper', id: 30, age: 27, phone: '0987654321', address: 'AKJSHDFKA' },
    { firstName: 'Michael', id: 31, age: 30, phone: '9876543210', address: 'AKJSHDFKA' },
    { firstName: 'Grace', id: 32, age: 33, phone: '8765432109', address: 'AKJSHDFKA' },
    { firstName: 'James', id: 33, age: 28, phone: '7654321098', address: 'AKJSHDFKA' },
    { firstName: 'Abigail', id: 34, age: 31, phone: '6543210987', address: 'AKJSHDFKA' },
    { firstName: 'Benjamin', id: 35, age: 26, phone: '5432109876', address: 'AKJSHDFKA' },
    { firstName: 'Chloe', id: 36, age: 29, phone: '4321098765', address: 'AKJSHDFKA' },
    { firstName: 'Lucas', id: 37, age: 32, phone: '3210987654', address: 'AKJSHDFKA' },
    { firstName: 'Luna', id: 38, age: 27, phone: '2109876543', address: 'AKJSHDFKA' },
    { firstName: 'Matthew', id: 39, age: 30, phone: '1098765432', address: 'AKJSHDFKA' },
    { firstName: 'Emily', id: 40, age: 33, phone: '0987654321', address: 'AKJSHDFKA' },
    { firstName: 'Logan', id: 41, age: 28, phone: '9876543210', address: 'AKJSHDFKA' },
    { firstName: 'Nick', id: 42, age: 29, phone: '9876543210', address: 'AKJSHDFKA' },
    { firstName: 'Aiden', id: 43, age: 26, phone: '7654321098', address: 'AKJSHDFKA' },
    { firstName: 'Avery', id: 44, age: 29, phone: '6543210987', address: 'AKJSHDFKA' },
    { firstName: 'Jackson', id: 45, age: 32, phone: '5432109876', address: 'AKJSHDFKA' },
    { firstName: 'Sophia', id: 46, age: 27, phone: '4321098765', address: 'AKJSHDFKA' },
    { firstName: 'Mila', id: 47, age: 30, phone: '3210987654', address: 'AKJSHDFKA' },
    { firstName: 'Henry', id: 48, age: 33, phone: '2109876543', address: 'AKJSHDFKA' },
    { firstName: 'Mason', id: 49, age: 28, phone: '1098765432', address: 'AKJSHDFKA' },
    { firstName: 'Aria', id: 50, age: 31, phone: '0987654321', address: 'AKJSHDFKA' },
    { firstName: 'Elijah', id: 51, age: 26, phone: '9876543210', address: 'AKJSHDFKA' },
    { firstName: 'Scarlett', id: 52, age: 29, phone: '8765432109', address: 'AKJSHDFKA' },
    { firstName: 'Logan', id: 53, age: 32, phone: '7654321098', address: 'AKJSHDFKA' },
    { firstName: 'Grace', id: 54, age: 27, phone: '6543210987', address: 'AKJSHDFKA' },
    { firstName: 'Ethan', id: 55, age: 30, phone: '5432109876', address: 'AKJSHDFKA' },
    { firstName: 'Zoe', id: 56, age: 33, phone: '4321098765', address: 'AKJSHDFKA' },
    { firstName: 'Lucas', id: 57, age: 28, phone: '3210987654', address: 'AKJSHDFKA' },
    { firstName: 'Liam', id: 58, age: 31, phone: '2109876543', address: 'AKJSHDFKA' },
    { firstName: 'Luna', id: 59, age: 26, phone: '1098765432', address: 'AKJSHDFKA' },
    { firstName: 'Aiden', id: 60, age: 29, phone: '0987654321', address: 'AKJSHDFKA' },
    { firstName: 'Carter', id: 61, age: 32, phone: '9876543210', address: 'AKJSHDFKA' },
    { firstName: 'Ella', id: 62, age: 27, phone: '8765432109', address: 'AKJSHDFKA' }
  ];

  public employeesSubject: Subject < any >= new Subject < any > ();


  constructor() {
    console.log("service oninti")
  }


  getEmp() {
    this.employeesSubject.next(this.employees);
  }


  getNumber(age: any): number {
    if (typeof (age) == "string") {
      return parseInt(age);
    } else {
      return age;
    }
  }
}
