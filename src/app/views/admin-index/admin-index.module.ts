import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {AdminIndexRoutingModule} from './admin-index-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AdminIndexRoutingModule,
    HttpClientModule
  ],
  declarations: [IndexComponent]
})
export class AdminIndexModule { }
