import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { SearchAcommodationsComponent } from './search-acommodations/search-acommodations.component'
import { MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: 'app',
    //canActivate: [AuthGuard],
    children: [
      {
        path: 'register', 
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'search',
        component: SearchAcommodationsComponent,
      }
    ],
    //data: {roles:['']}
    
  }]

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    SearchAcommodationsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSortModule,
    MatIconModule,
    
    RouterModule.forChild(routes)
  ]
})
export class SharedModule { }
