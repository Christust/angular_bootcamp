import { Component, OnInit } from '@angular/core';
import { ITask, Level } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  task1: ITask = {
    title: 'Tarea 1',
    completed: false,
    description: 'Descripcion 1',
    level: Level.Ugent,
  };

  task2: ITask = {
    title: 'Tarea 2',
    completed: false,
    description: 'Descripcion 2',
    level: Level.Info,
  };

  constructor() {}

  deleteTask(task: ITask) {
    alert(`Se eliminara la tarea: ${task.title}`);
  }

  ngOnInit(): void {}
}
