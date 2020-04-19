import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    CdkTableModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
