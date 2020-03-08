import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
   
import { Observable } from 'rxjs/Observable';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  

  
@Injectable()  
export class DdbbService {  
  
  constructor(private http: Http) { }  
  
  saveItem(user){      
    return this.http.post('http://localhost:8080/api/SaveItem/', user)  
            .map((response: Response) =>response.json())              
  }  
  
  upload(file){       
    return this.http.post('http://localhost:8080/api/Upload/', file)  
            .map((response: Response) => response)              
  }  
  
  getItemsByCategory(category){    
    return this.http.get('http://localhost:8080/api/GetItemsByCategory/', {params: {"category": category}})  
            .map((response: Response) => response.json())     
  }  
  getItems(){       
    return this.http.get('http://localhost:8080/api/GetItems/')  
            .map((response: Response) => response.json())     
  }  
 deleteItem(id){   
    return this.http.post('http://localhost:8080/api/DeleteItem/',{'id': id})  
            .map((response: Response) =>response.json())               
  }  
  
}