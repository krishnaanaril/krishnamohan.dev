import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MatChipsModule } from '@angular/material/chips';
import {
  MatToolbarModule
} from '@angular/material/toolbar';

@NgModule({
  exports: [
    CdkTableModule,    
    MatToolbarModule,
    MatChipsModule    
  ],
})
export class MaterialModule {}
