import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  addDetails(data:any){
   return this.http.post('http://localhost:3000',data)
  }
  getDetails(){
    return this.http.get('http://localhost:3000');
  }
  loginUser(data: any){
    console.log("calll loginnn");
    
    return this.http.post('http://localhost:3000/login',data,{responseType: 'text'})
  }
  registerUser(data: any){
    return this.http.post('http://localhost:3000/register',data,{responseType: 'text'})
  }
  getUsername(auth_token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get('http://localhost:3000/username',{ headers: headers })
  }
  }

