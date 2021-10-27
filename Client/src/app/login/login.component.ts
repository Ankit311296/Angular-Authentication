import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { AppModule } from '../app.module';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  durationInSeconds = 5;
  data: any;
  auth_token: any;
  @ViewChild(AppModule) child:any;
  constructor(private _snackBar: MatSnackBar,private cd:CommonService,private router:Router) {
    this.auth_token =localStorage.getItem('token')
    console.log("token",this.auth_token);
    this.cd.getUsername(this.auth_token).subscribe(
      val =>{
       if(val){
        this.router.navigate(['/dashboard'])
       }
     
    (error: any) =>this.router.navigate(['/'])
      
    })
   }

  ngOnInit(){
    console.log(this.child.message);
    

  }
  myForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  submit(){
    this.cd.loginUser(this.myForm.value).subscribe(d =>{
      if(d !=='Not Allowed'){
        const obj = JSON.parse(d);
        console.log("===>",obj.accessToken);
        localStorage.setItem('token',obj.accessToken)
        
        
        
        

        this.router.navigate(['/dashboard'])
      }
      
      this._snackBar.open(d,'',{
        duration:3000
      });
    })
    

  }
  openSnackBar(message: string){
    this._snackBar.open(message,'',{
      duration:3000
    });
    

  }

}
