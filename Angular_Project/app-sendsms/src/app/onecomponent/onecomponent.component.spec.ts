import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONEcomponentComponent } from './onecomponent.component';

describe('ONEcomponentComponent', () => {
  let component: ONEcomponentComponent;
  let fixture: ComponentFixture<ONEcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ONEcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ONEcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
