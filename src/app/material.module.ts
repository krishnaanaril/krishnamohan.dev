import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatToolbarModule
} from '@angular/material/toolbar';

@NgModule({
  exports: [
    CdkTableModule,    
    MatToolbarModule    
  ],
})
export class MaterialModule {}
