import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeDataRecordsComponent } from './charge-data-records.component';

describe('ChargeDataRecordsComponent', () => {
  let component: ChargeDataRecordsComponent;
  let fixture: ComponentFixture<ChargeDataRecordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargeDataRecordsComponent]
    });
    fixture = TestBed.createComponent(ChargeDataRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
