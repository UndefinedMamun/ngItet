import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberShipFormComponent } from './member-ship-form.component';

describe('MemberShipFormComponent', () => {
  let component: MemberShipFormComponent;
  let fixture: ComponentFixture<MemberShipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberShipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberShipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
