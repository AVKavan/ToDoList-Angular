import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() todo!: Todos;
  @Input() i!: number;

  @Output() todoDelete: EventEmitter<Todos> = new EventEmitter(); 
  @Output() todoDone: EventEmitter<Todos> = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }
  

  onclick(todo: Todos){
    this.todoDelete.emit(todo);
    console.log("Deleted!")
  }

  markDone(todo: Todos)
  {
    this.todoDone.emit(todo);
  }
}
