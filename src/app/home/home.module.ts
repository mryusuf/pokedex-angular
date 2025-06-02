import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { FilterTypeComponent } from '../filter-type/filter-type.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    FilterTypeComponent]
})
export class HomePageModule {}
