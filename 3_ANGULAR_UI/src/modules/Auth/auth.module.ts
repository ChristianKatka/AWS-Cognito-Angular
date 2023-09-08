import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from 'src/material.module';
import { components } from '.';
import { effects } from './store/effects';
import { featureKey, reducers, metaReducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature(featureKey, reducers, { metaReducers }),
    EffectsModule.forFeature(effects),
  ],
  exports: [],
  declarations: [...components],
})
export class AuthModule {}
