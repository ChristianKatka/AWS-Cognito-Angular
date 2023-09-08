import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { components } from '.';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [...components],
  exports: [...components],
  providers: [],
  bootstrap: [],
})
export class SharedModule {}
