import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/Todos';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {
  
  title!: string;
  Desc!: string;
  @Output() toAdd: EventEmitter<Todos> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      sno: 1,
      title: this.title,
      Desc: this.Desc,
      active: true

    }
    this.toAdd.emit(todo);
  }
}
