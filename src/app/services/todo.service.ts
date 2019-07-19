import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  public getTodos(limit: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${limit ? `?_limit=${limit}` : ''}`);
  }

  public toggleCompleted(todo: Todo): Observable<object> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  public deleteTodo(todo: Todo): Observable<object> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete(url, httpOptions);
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
}
