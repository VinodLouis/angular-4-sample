import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DependencyModule } from './app.dependencies';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


const routes = [
{ path: '', redirectTo: '/tasks', pathMatch: 'full' },
{ path: 'tasks', component: TasksComponent },
{ path: 'tasks/new', component: NewTaskComponent },
{ path: 'tasks/:id', component: EditTaskComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NewTaskComponent,
    EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    DependencyModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
