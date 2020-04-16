import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { AddTaskModalPage } from '../modals/add-task-modal/add-task-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [TasksPage, AddTaskModalPage],
  entryComponents: [AddTaskModalPage],
})
export class TasksPageModule {}
