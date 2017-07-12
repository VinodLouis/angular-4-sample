import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../task';
import { TasksService } from '../service/tasks.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: '../new-task/new-task.component.html',
  styleUrls: ['../new-task/new-task.component.css'],
  providers: [TasksService]
})
export class EditTaskComponent implements OnInit {
  task: Task;
  taskID: String;
  constructor(private service: TasksService,private route: ActivatedRoute,private router: Router) { 
  	this.task = new Task();
  	this.taskID = "";
  }


  getTask(id : String){
  	this.service.getTask(id).subscribe((data) =>{
            this.task = data;
            }
            );

  }

  saveTask(addMore: Boolean) {
  	this.service.editTask(this.taskID,this.task).subscribe((data) =>{
            alert("Data modified")
            if(!addMore){
              this.router.navigate(['/tasks']);
            }else{
               this.router.navigate(['/tasks/new']); 
            }
            },(err) =>{
            	alert("Server Error")	
            }
            );
  	
  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
	    if (params['id']) {
	    	this.taskID = params['id'] 	
	    	this.getTask(this.taskID);
	    }
	  });
  	
  }

  resetForm(){
  	this.task = new Task();
  }

  cancelForm(){
  		this.router.navigate(['/tasks']);
  }

}
