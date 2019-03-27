import { async, TestBed } from '@angular/core/testing';
import { StarwarsUiModule } from './starwars-ui.module';

describe('StarwarsUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StarwarsUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StarwarsUiModule).toBeDefined();
  });
});
