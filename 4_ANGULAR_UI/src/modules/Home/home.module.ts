import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { components } from '.';
import { HomeRoutingModule } from './home-routing.module';
import { effects } from './store/effects';
import { featureKey, reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureKey, reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [...components],
  exports: [...components],
})
export class HomeModule {}
