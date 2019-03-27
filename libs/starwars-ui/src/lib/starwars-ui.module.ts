import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwapiTableComponent } from './swapi-table/swapi-table.component';
import { MatTableModule, MatPaginatorModule, MatListModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';
import { RowTemplateDirective } from './row-template.directive';
import { ShortNumberPipe } from './short-number.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  declarations: [SwapiTableComponent, RowTemplateDirective, ShortNumberPipe],
  exports: [SwapiTableComponent, RowTemplateDirective, ShortNumberPipe]
})
export class StarwarsUiModule {}
