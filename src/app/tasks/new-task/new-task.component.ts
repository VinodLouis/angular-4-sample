import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from '../service/tasks.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [TasksService]
})

export class NewTaskComponent implements OnInit {
  task : Task;	
  constructor(private service: TasksService, private router: Router) { 
  	
  }

  ngOnInit() {
  	this.task = new Task();	
  }

  saveTask(addMore: Boolean) {
  	this.service.saveTask(this.task).subscribe((data) =>{
            this.task = new Task();
            alert("Task Saved");
            if(!addMore){
            	this.router.navigate(['/tasks']);
            }
            },(err) =>{
            	alert("Server Error")	
            }
            );
  	
  }

  resetForm(){
  	this.task = new Task();
  }

  cancelForm(){
  		this.router.navigate(['/tasks']);
  }



}
