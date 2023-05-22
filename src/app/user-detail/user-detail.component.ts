import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() email:any;
   showwarning :boolean=false;
    QuizStarted:boolean=false;
    constructor(
      public router: Router
    ) { }

  ngOnInit(): void {
    debugger;
    console.log(this.email);
  }

  ShowWarningPopup(){
    this.showwarning=true;
  }

  ExitSubmited($myParam: string = ''): void {
    debugger
    const navigationDetails: string[] = ['/login'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  SignleChoice($myParam: string = ''): void {
    debugger
    const navigationDetails: string[] = ['/singlechoice'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }

  
  
  SatrtQuiz(){
    this.showwarning=false;
this.QuizStarted=true;
  }



}
