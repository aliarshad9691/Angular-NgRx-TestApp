import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';


const commonAppModules = [
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDividerModule
];

@NgModule({
  declarations: [],
  imports: [
    ...commonAppModules,
    CommonModule,
  ],
  exports: commonAppModules
})
export class SharedModule {
}
