import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ProfileModule} from "../profile/profile.module";
import {HomeViewComponent} from "./home-view/home-view.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    HomeViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfileModule,
    RouterModule
  ],
  exports: [
    HomeViewComponent
  ]
})
export class HomeViewModule { }
