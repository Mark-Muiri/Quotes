import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteInputFormComponent } from './quote-input-form.component';

describe('QuoteInputFormComponent', () => {
  let component: QuoteInputFormComponent;
  let fixture: ComponentFixture<QuoteInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteInputFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
