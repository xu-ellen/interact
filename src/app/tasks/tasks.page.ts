import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { AddTaskModalPage } from '../modals/add-task-modal/add-task-modal.page';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  public tasks = [];

  constructor(public modalController: ModalController, private storage: Storage, private zone: NgZone) { }

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

  async deleteTask(event, task) {
    let isChecked = event.detail.checked;

    if (isChecked) {
      // Delete the task
      await this.storage.get("tasks").then(tasks => {
        tasks = tasks.filter(function(e) { return e !== task })
        this.storage.set("tasks", tasks);
      });
    } else {
      this.addTask(task);
    }
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
