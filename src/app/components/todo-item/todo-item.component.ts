import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  // Dynamic classes
  setContainerClasses() {
    return {
      todo: true,
      'todo-is-completed': this.todo.completed
    };
  }

  setIdClasses() {
    return {
      id: true,
      'id-is-completed': this.todo.completed
    };
  }

  setTextClasses() {
    return {
      title: true,
      'title-is-completed': this.todo.completed
    };
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
    this.todoService.toggleCompleted(todo).subscribe(returned => console.log(returned));
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
