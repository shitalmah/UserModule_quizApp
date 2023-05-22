import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { LoginService } from '../login.service';
import { HeroCommunicateService } from '../hero-communicate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any;
constructor(private router:Router,public LoginService:LoginService,public communicateservice:HeroCommunicateService){

  communicateservice.publish(this.data);
}

ngOnInit(): void {
  debugger;
  email:this.email;
  fullname:this.fullname

} 


/* LoginSubmited($myParam: string = ''): void {
  debugger
  const navigationDetails: string[] = ['/userdetails'];
  if($myParam.length) {
    navigationDetails.push($myParam);
  }
  this.router.navigate(navigationDetails);
} */
LoginSubmited() {   
  debugger;
    this.LoginService.Login(this.email.value).subscribe(res => {   
      const navigationDetails: string[] = ['/userdetails'];
     // alert(res.toString());
     if(res!=null)
     {
      this.data=res;       
      this.router.navigate(navigationDetails);
     }
     else
     {
      
      alert("Email is invalid");
     }
    });
  }









  goToBottom(){
    debugger
    window.scrollTo(0,document.body.scrollHeight);
  }

   Loginform=new FormGroup({
    fullname: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email])
   });

get fullname():FormControl{
  return this.Loginform.get('fullname') as FormControl;
}


get email():FormControl{
  return this.Loginform.get('email') as FormControl;
}
}