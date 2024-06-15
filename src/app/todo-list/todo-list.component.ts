import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent]
})
export class TodoListComponent {
  todos = [
    { text: 'Learn Angular' },
    { text: 'Build an app' }
  ];
  newTodoText = '';

  addTodo() {
    if (this.newTodoText.trim()) {
      this.todos.push({ text: this.newTodoText });
      this.newTodoText = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
