import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseConComponent } from './base-con.component';

describe('BaseConComponent', () => {
  let component: BaseConComponent;
  let fixture: ComponentFixture<BaseConComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseConComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
