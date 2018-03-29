import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipFeeComponent } from './membership-fee.component';

describe('MembershipFeeComponent', () => {
  let component: MembershipFeeComponent;
  let fixture: ComponentFixture<MembershipFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
