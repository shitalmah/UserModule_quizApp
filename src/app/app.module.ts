import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{CountdownModule} from 'ngx-countdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { SingleChoiceComponent } from './single-choice/single-choice.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule} from '@angular/common/http';
import { TimeEndComponent } from './time-end/time-end.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    LoginComponent,
    PagenotFoundComponent,
    SingleChoiceComponent,
    NavbarComponent,
    TimeEndComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
