import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
   todayTime!: Date;
   date!: string;
   todos!: Todos[]
   localItem: string | null;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null)
    {
    this.todos=[
    ]
  }
  else{
     this.todos = JSON.parse(this.localItem);
  }
  // this.date = this.todayTime.toISOString();
  }

  ngOnInit(): void {
  }


  DeleteTheTodo(todo: Todos)
  {
    this.todos.splice(this.todos.indexOf(todo),1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  AddTodo(todo: Todos)
  {
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  }
  MarkDoneTodo(todo: Todos)
  {
  //   const index= this.todos.indexOf(todo);
  //  this.todos[index].active = !this.todos[index].active;
  todo.active = !todo.active;
   localStorage.setItem("todos",JSON.stringify(this.todos));

  

  }
}
