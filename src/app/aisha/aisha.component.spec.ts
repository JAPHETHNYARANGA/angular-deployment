import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AishaComponent } from './aisha.component';

describe('AishaComponent', () => {
  let component: AishaComponent;
  let fixture: ComponentFixture<AishaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AishaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
