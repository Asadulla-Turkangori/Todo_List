import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { todolist } from '../todolist';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private url = "http://localhost:3000/todolist/";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  fetchAll():Observable<todolist[]>{
    return this.http.get<todolist[]>(this.url,{responseType:'json'});
  }

  insertAll(data:any):Observable<any>{
    console.log(data);
    return this.http.post<Partial<todolist>>(this.url,data,this.httpOptions);
  }

  delete(id:any):Observable<any>{
    return this.http.delete(this.url+id);
  }


  update(todo:Partial<todolist>):Observable<any>{
    console.log(todo);
    return this.http.put(this.url,todo,this.httpOptions);
  }
  


  updateActive(id:any,value:any):Observable<any>{
    return this.http.put(this.url+id,value,this.httpOptions);
  }

  constructor(private http:HttpClient) { }
}
