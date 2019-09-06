import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {


  receivedTotalScore: number=0;

  
  firstName: string='';
  lastName:string='';

  //student=[{firstName: '',lastName: ''}];

  student={firstName: '',lastName: ''};


  onButtonClick(){
    
    console.log("Hello");

    this.student.firstName=this.firstName;
    this.student.lastName=this.lastName;

    console.log(this.student);

    console.log("Bye ");
  }



  getScore(message: number) {

  console.log("enha pahunch gaye hain");
    this.receivedTotalScore = message;
  }
  

  constructor() { }

  ngOnInit() {
  }

}
