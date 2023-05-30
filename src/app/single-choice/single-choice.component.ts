import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { LoginComponent } from '../login/login.component';
import { QuizAttemptServiceService } from './quiz-attempt-service.service';
import { Time } from '@angular/common';
import { VirtualTimeScheduler, map, take, timer, timestamp } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import {List} from 'linqts';
import Swal from 'sweetalert2';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
  
})
export class SingleChoiceComponent implements OnInit {

  
  myform:FormGroup
  quetionlist:any[]=[];
  Optionlist:any;
  Quetiontype:any;
  GetOptionlist:any[]=[];
  CurrentQuetionNumber :number=0;
  display: any;
  quetiontext:any
  btnNext:string="Next"
 QuetionId:any
  data:any[]=[];
  Singlechoice:any=false;
  Multichoce:any=false;
  isButtonVisible:any=false;
  TextDescription:any=false;
  FillIntheBlanks:any=false;
  i:number;
 
  resSTR:any
  resJSON:any
  //public interval: Time | undefined;
userId:any
quizId:any
questionTypeId:string
timeduration:string 
quizid:any

  interval: any;
  constructor(
    private http: HttpClient,public singlechoiceservice:QuizAttemptServiceService,private router:Router
  ) { 
  }
  ngOnInit(): void {
  
   this.quizId=localStorage.getItem("quizId");
   //console.log(this.userId);
  // console.log(this.email);
   this.LoadQuestions();
   
   this.OnSubmited();
   
  } 

LoadQuestions(){
  debugger
  this.singlechoiceservice.GetQuetionByQuizId(this.quizId).subscribe(res => { 
  this.quetionlist=res;
  //this.timer(res[0].timeDuration);
  this.timeduration=res[0].timeDuration;
  //this.display=this.timeduration;
  this.display="00:30:00";
 // var hms = '02:04:33';   // your input string
var a = this.display.split(':'); // split it at the colons

// minutes are worth 60 seconds. Hours are worth 60 minutes.
var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
this.display=seconds/60;

this.startTimer();

console.log(seconds/60);


  this.btnNext="Next";
      // this.singlechoiceservice.GetQuetionByQuizId(this.data[0].id).subscribe(res1=>{      
      // this.quetionlist=res1;
      this.singlechoiceservice.GetAllOPtions().subscribe(res3=>{ 
        this.Optionlist=res3;
        this.singlechoiceservice.GetAllQuetionType().subscribe((res4)=>{ 
          this.Quetiontype=res4;
      
        this.LoadNextQuetion();
       
   });
  });
});
  
}

 nextquetions()
 {
  if(this.CurrentQuetionNumber<this.quetionlist.length-1){
    this.CurrentQuetionNumber++;    
   this.LoadNextQuetion();
   if(this.CurrentQuetionNumber==this.quetionlist.length-1)
    {
      this.btnNext="Submit";
      this.isButtonVisible=true
     // this.OnSubmited();
     
    }
    }
    else
    if(this.CurrentQuetionNumber==this.quetionlist.length-1)
    {
      this.btnNext="Submit";
     
    }
   
  }


  OnSubmited()
  {

    if(this.btnNext=="Submit")
    {
    const navigationDetails: string[] = ['/timeout'];
    // alert(res.toString()); 
    Swal.fire({
      title: 'Are sure want to submit your test?',
      //showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Submit',
      //denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        Swal.fire('Saved!', '', 'success')
        this.router.navigate(navigationDetails);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })  
    
    }
  }
 
 Previousquetion()
 {
  
  this.btnNext="Next";
  if(this.CurrentQuetionNumber<=this.quetionlist.length-1 && this.CurrentQuetionNumber>0 ){
    this.CurrentQuetionNumber--;    
    this.LoadNextQuetion();
    
    }
  }
  LoadNextQuetion()
  {
    
    debugger
    this.GetOptionlist.length = 0;
    if(this.quetionlist[this.CurrentQuetionNumber].questionTypeId==this.Quetiontype.data[0].id)
    {
      this.quetiontext=this.quetionlist[this.CurrentQuetionNumber].questionText; 
      this.QuetionId=this.quetionlist[this.CurrentQuetionNumber].id;
     //this.Optionlist=this.Optionlist.data.any(x=>x.id==this.QuetionId)
      for(let i=0;i<=this.Optionlist.data.length-1;i++)
      {
        if(this.Optionlist.data[i].questionId==this.QuetionId){
            // this.GetOptionlist=this.Optionlist.data[i].optionText;
             this.GetOptionlist.push(this.Optionlist.data[i].optionText)             
        }
        else
        {
         continue;
        }
       
      }
      console.log(this.GetOptionlist);
      this.TextDescription=false
      this.Multichoce=false
      this.FillIntheBlanks=false
      this.Singlechoice=true
     }
     else
   if(this.quetionlist[this.CurrentQuetionNumber].questionTypeId==this.Quetiontype.data[1].id)
    {
      this.quetiontext=this.quetionlist[this.CurrentQuetionNumber].questionText;         
      this.QuetionId=this.quetionlist[this.CurrentQuetionNumber].id;
     //this.Optionlist=this.Optionlist.data.any(x=>x.id==this.QuetionId)
      for(let i=0;i<=this.Optionlist.data.length-1;i++)
      {
        if(this.Optionlist.data[i].questionId==this.QuetionId){
            // this.GetOptionlist=this.Optionlist.data[i].optionText;
             this.GetOptionlist.push(this.Optionlist.data[i].optionText)             
        }
        else
        {
         continue;
        }
     
      this.TextDescription=false
      this.Multichoce=true
      this.FillIntheBlanks=false
      this.Singlechoice=false
     }
    }
 else
   if(this.quetionlist[this.CurrentQuetionNumber].questionTypeId==this.Quetiontype.data[2].id)
    {
      this.quetiontext=this.quetionlist[this.CurrentQuetionNumber].questionText;    
      this.TextDescription=true
      this.Multichoce=false
      this.FillIntheBlanks=false
      this.Singlechoice=false
     }
  else
   if(this.quetionlist[this.CurrentQuetionNumber].questionTypeId==this.Quetiontype.data[3].id)
    {
      this.quetiontext=this.quetionlist[this.CurrentQuetionNumber].questionText;
      for(let i=0;i<=this.Optionlist.data.length-1;i++)
      {
        if(this.Optionlist.data[i].questionId==this.QuetionId){
            // this.GetOptionlist=this.Optionlist.data[i].optionText;
             this.GetOptionlist.push(this.Optionlist.data[i].optionText)             
        }
        else
        {
         continue;
        }
      }  
      this.TextDescription=false
      this.Multichoce=false
      this.FillIntheBlanks=true
      this.Singlechoice=false
     
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      
      if(this.display > 0) {
        this.display--;
      }
         if(this.display == 10) {
        
    // alert(res.toString()); 
    Swal.fire({
      title: 'Hurry Only 10 Seconds Remaning',
     // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Ok',
     // denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       // Swal.fire('Saved!', '', 'success')
       this.display--;
      } else if (result.isDenied) {
        //Swal.fire('Changes are not saved', '', 'info')
      }})
    
      }
      if(this.display==0)
      {
        const navigationDetails: string[] = ['/timeout'];
      this.router.navigate(navigationDetails);
      this.display=0;
    }
      
    },1000)
  }


  changeSelection(){
  this.GetOptionlist = this.GetOptionlist.filter((value, index) => {
    return value.isChecked
  });


  

}


}

