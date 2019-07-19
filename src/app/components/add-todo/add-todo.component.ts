import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  todoTitle: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.todoTitle,
      completed: false
    };

    if (this.todoTitle) {
      this.addTodo.emit(todo);
      this.todoTitle = '';
    }
  }
}
