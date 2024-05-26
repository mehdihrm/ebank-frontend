import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAcountsComponent } from './customers-acounts.component';

describe('CustomersAcountsComponent', () => {
  let component: CustomersAcountsComponent;
  let fixture: ComponentFixture<CustomersAcountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomersAcountsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersAcountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
