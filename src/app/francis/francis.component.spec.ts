import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrancisComponent } from './francis.component';

describe('FrancisComponent', () => {
  let component: FrancisComponent;
  let fixture: ComponentFixture<FrancisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrancisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrancisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
