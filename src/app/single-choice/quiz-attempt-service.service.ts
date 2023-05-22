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
  
  constructor(private http : HttpClient) {

  this.Url = 'https://localhost:7278/api/QuizQuetion/GetQuizId/';  
  

this.Url1="https://localhost:7278/api/QuizQuetion/GetQuetionsbyId"

  const headerSettings: {[name: string]: string | string[]; } = {};  
  this.header = new HttpHeaders(headerSettings);  
  }
  ngOnInit(): void {
   // this.GetQuizidByUser();
  }

    



  // Department
  GetQuizidByUser(data : any): Observable<any[]> {
    debugger;    
    console.log("Get data",this.http.get<any[]>(this.Url + 1))
    return this.http.get<any[]>(this.Url +data);
    
  }

  GetQuetionByQuizId(data : any): Observable<any[]> {
    debugger;    
    console.log("Get data",this.http.get<any[]>(this.Url1 +"?id="+ data))
    return this.http.get<any[]>(this.Url1 +"?id="+ data);
    
  }

 



}
