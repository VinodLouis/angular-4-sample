import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Task } from '../task';

@Injectable()
export class TasksService {

  constructor(private http: Http) { }
  private baseURL = "http://localhost:8082"
  private tasksURL = "/task";


  extractTasks(res: Response) {
    return res.json().data;
  }

  extractResponse(res: Response) {
    return res.json();
  }

  handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get(this.tasksURL).map(this.extractTasks).catch(this.handleError);
  }

  saveTask(task: Task): Observable<any>{
    delete task._id;
    return this.http.post(this.tasksURL,task).map(this.extractResponse).catch(this.handleError);
  }

  getTask(id: String): Observable<Task>{
    return this.http.get(this.tasksURL + "/" + id).map(this.extractTasks).catch(this.handleError);
  }

  editTask(id: String, task: Task){
    delete task._id;
    return this.http.put(this.tasksURL + "/" + id,task).map(this.extractResponse).catch(this.handleError);
  }

  deleteTask(id: String){
    return this.http.delete(this.tasksURL + "/" + id).map(this.extractResponse).catch(this.handleError);
  }

}
