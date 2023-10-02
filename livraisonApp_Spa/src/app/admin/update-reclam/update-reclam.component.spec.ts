import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReclamComponent } from './update-reclam.component';

describe('UpdateReclamComponent', () => {
  let component: UpdateReclamComponent;
  let fixture: ComponentFixture<UpdateReclamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReclamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
