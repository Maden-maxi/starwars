import { Component, ViewChild, Input, TemplateRef, ContentChild, Output, EventEmitter, OnInit } from '@angular/core';
import { MatPaginator, MatSort, Sort, PageEvent } from '@angular/material';
import { SwapiTableDataSource } from './swapi-table-datasource';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RowTemplateDirective } from '../row-template.directive';
import { StarwarsService } from '../starwars/starwars.service';

@Component({
  selector: 'starwars-swapi-table',
  templateUrl: './swapi-table.component.html',
  styleUrls: ['./swapi-table.component.css'],
  providers: [StarwarsService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SwapiTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ContentChild(RowTemplateDirective, {read: TemplateRef}) rowTemplate;
  @Input() dataColumns = [
    {name: '№', key: 'id'},
    {name: 'Name', key: 'name'},
    {name: 'Terrain', key: 'terrain'},
    {name: 'Population', key: 'population'},
    {name: 'Residents amount', key: 'residents'},
    {name: 'Films amount', key: 'films'}
  ];
  @Input() data = [];
  @Output() action: EventEmitter<{page: PageEvent; sort: Sort; action: string}> = new EventEmitter();
  get columnKeys() {
    return this.dataColumns.map(c => c.key);
  }
  expandedElement;
  dataSource: any;
  page: PageEvent;
  sortState: Sort;
  constructor(public readonly starwars: StarwarsService) {}
  ngOnInit() {
    this.dataSource = new SwapiTableDataSource(this.paginator, this.sort, this.starwars);
  }
  controlState(action) {
    this.action.emit({
      page: this.page,
      sort: this.sortState,
      action
    });
  }
  onPage($event: PageEvent) {
    this.page = $event;
    this.controlState('page');
  }
  onSort($event: Sort) {
    this.sortState = $event;
    this.controlState('sort');
  }
  toggleElement(element) {
    console.log(element);
    this.expandedElement = this.expandedElement === element ? null : element;
    if (this.expandedElement) {
      this.starwars.update(element);
    } else {
      this.starwars.reset();
    }
  }
  
}
