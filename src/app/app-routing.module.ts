import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchAcommodationsComponent } from './shared/search-acommodations/search-acommodations.component';

const routes: Routes = [
  { path: 'search', component: SearchAcommodationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule, 
  ]
})
export class AppRoutingModule { }
