import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-new-admission',
  templateUrl: './new-admission.component.html',
  styleUrls: ['./new-admission.component.css']
})
export class NewAdmissionComponent implements OnInit {
 myForm = new FormGroup({
  firstName:new FormControl('',[Validators.required, Validators.minLength(3)]),
  lastName:new FormControl('',[Validators.required, Validators.minLength(3)]),
  birthday:new FormControl('',[Validators.required, Validators.minLength(3)]),
  paid:new FormControl('',[Validators.required, Validators.minLength(3)]),
  unpaid:new FormControl('',[Validators.required, Validators.minLength(3)]),
  class:new FormControl('',[Validators.required, Validators.minLength(3)]),
  file:new FormControl('',[Validators.required])

 })
  selectedFile: File | undefined;
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    
    
  }
  test(event: any){
    console.log(event.target.value);
    
  }
  submit(){
    console.log(this.myForm.value.file);
    this.cs.addDetails(this.myForm.value).subscribe(d =>{
      console.log(d);
      
    });

  }

}
