import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditColiComponent } from './edit-coli.component';

describe('EditColiComponent', () => {
  let component: EditColiComponent;
  let fixture: ComponentFixture<EditColiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditColiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditColiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
