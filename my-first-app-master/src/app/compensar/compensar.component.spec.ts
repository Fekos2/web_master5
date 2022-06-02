import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompensarComponent } from './compensar.component';

describe('CompensarComponent', () => {
  let component: CompensarComponent;
  let fixture: ComponentFixture<CompensarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompensarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompensarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
