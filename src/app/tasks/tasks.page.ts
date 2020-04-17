import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { AddTaskModalPage } from '../modals/add-task-modal/add-task-modal.page';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  public tasks = [];

  constructor(public modalController: ModalController, private storage: Storage) { }

  ngOnInit() {
    this.getTasks();
  }

  async addTask(task) {
    await this.storage.get("tasks").then(tasks => {
      if (tasks) {
          tasks.push(task);
          this.storage.set("tasks", tasks);
      } else {
        this.storage.set("tasks", [task]);
      }
    });
  }

  async getTasks() {
    await this.storage.get("tasks").then(tasks => this.tasks = tasks)
  }

  async finishTask(event, task) {
    // Delete the task
    await this.storage.get("tasks").then(tasks => {
      tasks = tasks.filter(function(e) { return e !== task })
      this.storage.set("tasks", tasks);
      this.tasks = tasks;
    });

    // Add point for user
    await this.storage.get("points").then(points => {
      this.storage.set("points", points + 1);
    });
  }

  async deleteTasks() {
    this.storage.clear();

    this.getTasks();
  }

  async presentModal() {
    this.getTasks();

    const modal = await this.modalController.create({
      component: AddTaskModalPage
    });

    modal.onDidDismiss().then(data => {
        this.getTasks();
    });

    return await modal.present();
  }
}
