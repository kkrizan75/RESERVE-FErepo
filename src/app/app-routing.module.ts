import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Temp2Component } from './admin/temp2/temp2.component';

const routes: Routes = [
  { path: '', component: Temp2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule, 
  ]
})
export class AppRoutingModule { }
