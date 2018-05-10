import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MobxAngularModule } from 'mobx-angular';
import { TodoComponent } from './components/todo/todo.component';
import { ActionsComponent } from './components/actions/actions.component';
import { FilterComponent } from './components/filtering/filters.component';
import { Todos } from './store/todos.store';
import { Filter } from './store/filter.store';


@NgModule({
  imports: [BrowserModule, FormsModule, MobxAngularModule],
  declarations: [AppComponent, HelloComponent, TodoComponent, ActionsComponent, FilterComponent],
  bootstrap: [AppComponent],
  providers: [Todos, Filter]
})
export class AppModule { }
