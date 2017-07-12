import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from './task';
import { TasksService } from './service/tasks.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TasksService]
})

export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor(private service: TasksService, private router: Router) { 
    
  }

  ngOnInit() {
    this.tasks = [];  
    this.loadTasks();
    
  }

  loadTasks(){
      this.service.getTasks().subscribe((tasks) =>{
            this.tasks = tasks;
            console.log(this.tasks);
            }
            );
  }

  deleteTask(id: String){
    if(!confirm("This data will be lost permanently. Are you sure you want to delete this data ?"))
      return;  
    this.service.deleteTask(id).subscribe((data) =>{
            alert("Data Deleted");
            this.loadTasks();
            },(err) =>{
              alert("Server Error") 
            }
            );
  }

  navigateNew(){
    this.router.navigate(['/tasks/new']); 
  }
}
