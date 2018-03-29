import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipCriteriaComponent } from './membership-criteria.component';

describe('MembershipCriteriaComponent', () => {
  let component: MembershipCriteriaComponent;
  let fixture: ComponentFixture<MembershipCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
