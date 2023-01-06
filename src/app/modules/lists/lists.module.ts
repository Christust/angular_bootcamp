import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicListComponent } from './basic-list/basic-list.component';

@NgModule({
  declarations: [BasicListComponent],
  imports: [CommonModule],
  exports: [BasicListComponent],
})
export class ListsModule {}
