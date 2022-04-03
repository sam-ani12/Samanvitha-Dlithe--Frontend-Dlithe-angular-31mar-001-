import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastrylistDetailsComponent } from './pastrylist-details.component';

describe('PastrylistDetailsComponent', () => {
  let component: PastrylistDetailsComponent;
  let fixture: ComponentFixture<PastrylistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastrylistDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastrylistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
