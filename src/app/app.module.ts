import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { UserModule} from './user/user.module'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './shared/model/auth.interceptor';
import { AdminModule } from './admin/admin.module';
import { MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ViewChild } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    UserModule,
    HttpClientModule,
    AdminModule
  ],
  providers: [
     {
       provide: HTTP_INTERCEPTORS,
       useClass: TokenInterceptor,
       multi: true,
      
     }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
