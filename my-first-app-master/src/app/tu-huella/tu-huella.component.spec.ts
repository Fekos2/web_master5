import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuHuellaComponent } from './tu-huella.component';

describe('TuHuellaComponent', () => {
  let component: TuHuellaComponent;
  let fixture: ComponentFixture<TuHuellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuHuellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TuHuellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
