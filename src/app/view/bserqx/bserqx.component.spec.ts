/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BserqxComponent } from './bserqx.component';

describe('BserqxComponent', () => {
  let component: BserqxComponent;
  let fixture: ComponentFixture<BserqxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BserqxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BserqxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
