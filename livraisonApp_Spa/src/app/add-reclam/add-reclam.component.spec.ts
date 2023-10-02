import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReclamComponent } from './add-reclam.component';

describe('AddReclamComponent', () => {
  let component: AddReclamComponent;
  let fixture: ComponentFixture<AddReclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReclamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
