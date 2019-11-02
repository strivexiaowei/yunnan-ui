/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { L7AntvComponent } from './l7-antv.component';

describe('L7AntvComponent', () => {
  let component: L7AntvComponent;
  let fixture: ComponentFixture<L7AntvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L7AntvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L7AntvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
