import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.page.html',
  styleUrls: ['./add-task-modal.page.scss'],
})
export class AddTaskModalPage implements OnInit {
  taskInput: string;

  constructor(public modalController: ModalController, private storage: Storage) { }

  ngOnInit() {
  }

  async addTask() {
    await this.storage.get("tasks").then(tasks => {
      if (tasks) {
          tasks.push(this.taskInput);
          this.storage.set("tasks", tasks);
      } else {
        this.storage.set("tasks", [this.taskInput]);
      }
    });

    this.dismiss();
  }

  async dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    await this.modalController.dismiss({
      'dismissed': true
    });
  }
}
