import { Injectable } from '@nestjs/common';
import {Todo} from "@myorg/data";

@Injectable()
export class AppService {
  todos: Todo[] = [];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): Todo[] {
    this.todos.push(this.createTodo(title));
    return this.todos;
  }

  editTodo(id: number, title: string): Todo[] {
    const idx = this.todos.findIndex(todo => todo.id === id)
    if (idx !== -1) {
      this.todos[idx].title = title;
    }
    return this.todos;
  }

  removeTodo(id: number): Todo[] {
    return this.todos.filter(todo => todo.id !== id);
  }

  private createTodo(title: string): Todo {
    return {id: Date.now(), title};
  }
}
