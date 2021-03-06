import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KundennummerComponent } from './kundennummer.component';

describe('KundennummerComponent', () => {
  let component: KundennummerComponent;
  let fixture: ComponentFixture<KundennummerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KundennummerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KundennummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
