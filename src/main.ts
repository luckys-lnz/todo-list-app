import { bootstrapApplication } from '@angular/platform-browser';
import { TodoListComponent } from './app/todo-list/todo-list.component';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(TodoListComponent )
  .catch((err) => console.error(err));
