import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeichenketteComponent } from './zeichenkette.component';

describe('ZeichenketteComponent', () => {
  let component: ZeichenketteComponent;
  let fixture: ComponentFixture<ZeichenketteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeichenketteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeichenketteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
