import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPhotoComponent } from './missing-photo.component';

describe('MissingPhotoComponent', () => {
  let component: MissingPhotoComponent;
  let fixture: ComponentFixture<MissingPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
