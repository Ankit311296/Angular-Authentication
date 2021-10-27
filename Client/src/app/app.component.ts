import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';
  message = 'Hello!';
  constructor(private router:Router){}
  logout(){
    console.log("logout call");
    const token  =localStorage.clear();
    this.router.navigate(['/'])
    console.log(token);
    
    
  }
}
