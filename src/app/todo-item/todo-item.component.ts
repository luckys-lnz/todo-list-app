import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  standalone: true
})
export class TodoItemComponent {
  @Input() todo: any;
  @Output() remove = new EventEmitter<void>();

  removeTodo() {
    this.remove.emit();
  }
}
