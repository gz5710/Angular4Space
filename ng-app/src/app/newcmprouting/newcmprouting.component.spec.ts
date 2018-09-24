import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcmproutingComponent } from './newcmprouting.component';

describe('NewcmproutingComponent', () => {
  let component: NewcmproutingComponent;
  let fixture: ComponentFixture<NewcmproutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcmproutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcmproutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
