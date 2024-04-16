import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TimerService } from '../../timer.service';

interface Employee {
  id: number;
  imageUrl: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  age: number;
  dob: string;
  salary: number;
  address: string;
}

@Component({
  selector: 'app-api-emp',
  templateUrl: './api-emp.component.html',
  styleUrl: './api-emp.component.css'
})
export class ApiEmpComponent implements OnInit {
  employees: any[] = [];
  filterText:string ='';

  timerValueMin: number= 30;
  timerValueSec: number= 0;
  seconds:number=0;
 
  constructor(private http: HttpClient, private timerService: TimerService) {
   
  }

  ngOnInit(): void {
    this.fetchEmployees();
    this.timerService.timerValue$.subscribe(value => {
      console.log('Timer value:', value); // Add this line for debugging
      //this.timerValue = value;
      if(this.timerValueSec==0){
        this.timerValueSec=59;
      }else{
        this.timerValueSec--;
      }
      if(this.seconds!=60){
        this.seconds++;
      }else{
        this.seconds=0;
        this.timerValueMin--;
      }
    });
    this.timerService.startTimer();
  }

  // startTimer() {
  //   this.timerService.startTimer();
  // }

  // pauseTimer() {
  //   this.timerService.pauseTimer();
  // }

  // resumeTimer() {
  //   this.timerService.resumeTimer();
  // }

  // resetTimer() {
  //   this.timerService.resetTimer();
  //   this.timerValueMin=30;
  //   this.timerValueSec=0
  // }


  fetchEmployees() {
    const apiUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        console.log('Error fetching data:', error);
      }
    );
    console.log(this.employees);
    
  }
  p = 1;

}
