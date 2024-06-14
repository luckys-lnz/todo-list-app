import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { text } from 'stream/consumers';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todo = [{ text: 'learn Angular' }, { text: 'Build with Angular' }];
  newTodoText = '';

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todo.push({ text: this.newTodoText });
      this.newTodoText = '';
    }
  }

  removeTodo(index: number) {
    this.todo.splice(index, 1);
  }
}
