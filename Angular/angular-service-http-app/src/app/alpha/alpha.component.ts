import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  task: any[] = [];
  newTask = {};

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.task.subscribe(
      (task) => {this.task = task;}
      );
  }
  onSubmit() {
    this._taskService.addTask(this.newTask);
    this.newTask = {};
  }
  
}
