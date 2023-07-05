import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavBarComponent } from './nav-bar.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [NavBarComponent],
  exports: [NavBarComponent]
})
export class NavBarComponentModule {}
