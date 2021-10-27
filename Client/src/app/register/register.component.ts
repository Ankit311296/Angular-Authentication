import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data = {}
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
  }
  myForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
  submit(){
    this.cs.registerUser(this.myForm.value).subscribe(d =>{
      this.data = d;
      console.log(Object.keys(this.data));
      
      
    })
    
    
  }

}
