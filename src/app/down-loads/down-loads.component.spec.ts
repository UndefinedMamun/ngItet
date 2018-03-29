import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownLoadsComponent } from './down-loads.component';

describe('DownLoadsComponent', () => {
  let component: DownLoadsComponent;
  let fixture: ComponentFixture<DownLoadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownLoadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
