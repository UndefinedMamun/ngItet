import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMembershipComponent } from './about-membership.component';

describe('AboutMembershipComponent', () => {
  let component: AboutMembershipComponent;
  let fixture: ComponentFixture<AboutMembershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMembershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
