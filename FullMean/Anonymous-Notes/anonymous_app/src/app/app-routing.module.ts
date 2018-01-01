import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TaskComponent} from './task/task.component';
import {NoteComponent} from './note/note.component';

const routes: Routes = [
{path: '', pathMatch: 'full', component: TaskComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
