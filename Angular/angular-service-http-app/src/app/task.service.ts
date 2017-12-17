import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {
  task: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {
    this.retrieveTask();
  }

  retrieveTask(){
    this._http.get('https://5a35d8bf881a7b0012fe9dd3.mockapi.io/task').subscribe( (task: any[]) => { this.tasks.next(task); );
  }

  addTask(newTask: any){
    this._http.post('https://5a35d8bf881a7b0012fe9dd3.mockapi.io/task', newTask).subscribe( (response) => { this.retrieveTask(); }
    );
  }
}
