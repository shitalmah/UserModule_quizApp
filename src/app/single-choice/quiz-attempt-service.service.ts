import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class QuizAttemptServiceService implements OnInit {
  Url: string;
  header: any;
  Url1: string;
  Urlgetoption: any;
  GetURLQuetionType: any;

  
  constructor(private http : HttpClient) {

  this.Url = 'https://localhost:7137/api/Quiz/';  
  

this.Url1="https://localhost:7137/api/QuizQuestion/GetQuetiobQuizId"

this.Urlgetoption="https://localhost:7137/api/QuesAnsMapping/get-all"

this.GetURLQuetionType="https://localhost:7137/api/QuestionType/get-all"



  const headerSettings: {[name: string]: string | string[]; } = {};  
  this.header = new HttpHeaders(headerSettings);  
  }
  ngOnInit(): void {
   // this.GetQuizidByUser();
  }

    



  // Department
  // GetQuizidByUser(data : any): Observable<any[]> {
  //   debugger;    
  //  console.log("Get data",this.http.get<any[]>(this.Url + data))
  //   return this.http.get<any[]>(this.Url +data);
    
  // }

  GetQuetionByQuizId(data : any): Observable<any[]> {
    debugger;  
    return this.http.get<any[]>(this.Url1 +"?Quizid="+ data);
    
  }



  GetAllOPtions(): Observable<any[]> {
    debugger;      
    return this.http.get<any[]>(this.Urlgetoption);
    
  }

  GetAllQuetionType(): Observable<any[]> {
    debugger;      
    return this.http.get<any[]>(this.GetURLQuetionType);
    
  }
 



}
