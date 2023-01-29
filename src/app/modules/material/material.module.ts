import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos exportados de material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule],
})
export class MaterialModule {}
