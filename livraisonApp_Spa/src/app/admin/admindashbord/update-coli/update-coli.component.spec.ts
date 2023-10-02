import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateColiComponent } from './update-coli.component';

describe('UpdateColiComponent', () => {
  let component: UpdateColiComponent;
  let fixture: ComponentFixture<UpdateColiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateColiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateColiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
