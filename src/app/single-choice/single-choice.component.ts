import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { LoginComponent } from '../login/login.component';
import { QuizAttemptServiceService } from './quiz-attempt-service.service';
import { Time } from '@angular/common';
import { timer } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';



@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
  
})
export class SingleChoiceComponent implements OnInit {

  @Input() email:any;
  quetionlist:any[]=[];
  CurrentQuetionNumber :number=0;
  display: any;
  
  //public interval: Time | undefined;


  constructor(
    private http: HttpClient,public singlechoiceservice:QuizAttemptServiceService,private router:Router
  ) { 
  }
  ngOnInit(): void {
    debugger;
   
  // console.log(this.email);
   this.LoadQuestions();
   this.timer(1);
  } 

LoadQuestions(){
  this.singlechoiceservice.GetQuizidByUser(1).subscribe(res => { 
  
    //const navigationDetails: string[] = ['/userdetails'];
    this.singlechoiceservice.GetQuetionByQuizId(res.toString()).subscribe(res1=>{      
      this.quetionlist=res1;
      
   //      console.log(this.quetionlist);
    });
   /* if(res!=null)
   {
    this.data=res;       
    this.router.navigate(navigationDetails);
   }
   else
   {
    
    alert("Email is invalid");
   } */
  });
}


    
  timer(minute: number) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
     
      if (seconds == 0) {

        console.log("finished");        
        const navigationDetails: string[] = ['/timeout'];             
         this.router.navigate(navigationDetails);        
        clearInterval(timer);
      }
    }, 1000);
  }
 nextquetions()
 {
  if(this.CurrentQuetionNumber<this.quetionlist.length-1){
  this.CurrentQuetionNumber++;
  }
 }

 Previousquetion()
 {
  debugger;
  if(this.CurrentQuetionNumber>=this.quetionlist.length-1){
  this.CurrentQuetionNumber--;
  }
 }

}
