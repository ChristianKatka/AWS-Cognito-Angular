import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { components } from '.';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from 'src/material.module';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, SharedModule],
  declarations: [...components],
  exports: [...components],
})
export class HomeModule {}
