import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteStructureComponent } from './quote-structure.component';

describe('QuoteStructureComponent', () => {
  let component: QuoteStructureComponent;
  let fixture: ComponentFixture<QuoteStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
