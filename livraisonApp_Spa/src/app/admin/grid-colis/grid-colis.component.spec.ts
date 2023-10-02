import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridColisComponent } from './grid-colis.component';

describe('GridColisComponent', () => {
  let component: GridColisComponent;
  let fixture: ComponentFixture<GridColisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridColisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridColisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
