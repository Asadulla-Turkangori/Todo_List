import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TodolistService } from '../../services/todolist.service';
import { todolist } from '../../todolist';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  
  todos$:Observable<todolist[]>


  constructor(private TodolistService:TodolistService){
    this.todos$ = this.fetchAll();
  }

  fetchAll():Observable<todolist[]>{
    return this.TodolistService.fetchAll();
  }

  post(todoItem:any):void{
    const item = (<string>todoItem).trim();
    if(!item) return;
    console.log(item);

    this.todos$ = this.TodolistService.insertAll({description : item})
    .pipe(tap(()=>(this.todos$ = this.fetchAll())));

  }


  update(id:any,text:any){
    const item = (<string>text).trim();
    if(!item) return;

    const List:Partial<todolist> = {
      id:id,
      description:item
    }
    this.todos$ = this.TodolistService.update(List)
    .pipe(tap(()=>(this.todos$ = this.fetchAll())));
  }


  delete(id:any){
    this.todos$ = this.TodolistService.delete(id)
    .pipe(tap(()=>(this.todos$ = this.fetchAll())));
  }


  check(id:any,value: any){
    console.log(id,value);
    this.todos$ = this.TodolistService.updateActive(id,{active : value}).pipe(tap(()=>(this.todos$ = this.fetchAll())))
  }
}
