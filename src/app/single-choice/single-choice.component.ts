import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login.service';
import { LoginComponent } from '../login/login.component';
import { HeroCommunicateService } from '../hero-communicate.service';


@Component({
  selector: 'app-single-choice',
  templateUrl: './single-choice.component.html',
  styleUrls: ['./single-choice.component.css']
  
})
export class SingleChoiceComponent implements OnInit {

  @Input() email:any;
  quetionlist:any[]=[];
  quizquetionnumber :number=1;

  

  constructor(
    private http: HttpClient,public communicateservice:HeroCommunicateService
  ) { 
  }
  ngOnInit(): void {
    debugger;
   
   console.log(this.email);
   this.LoadQuestions();
  } 

LoadQuestions(){
  this.http.get('assets/quetions.json').subscribe((res:any)=>{
this.quetionlist=res;
  })
}

 

}
