import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { SwapiTableComponent } from './swapi-table.component';

describe('SwapiTableComponent', () => {
  let component: SwapiTableComponent;
  let fixture: ComponentFixture<SwapiTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiTableComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
