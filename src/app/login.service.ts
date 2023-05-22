import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
getdata:any
email:string | undefined 
  Url :string;  
  token : string | undefined;  
  header : any;  
  
  constructor(private http : HttpClient) {   
  
    this.Url = 'https://localhost:7278/api/User/';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  
 

  // Department
  Login(data : any): Observable<any[]> {
    debugger;
    this.getdata=this.http.get<any[]>(this.Url + data);
    console.log("Get data",this.http.get<any[]>(this.Url + data))
    return this.http.get<any[]>(this.Url +data);
    
  }


  
 
}


