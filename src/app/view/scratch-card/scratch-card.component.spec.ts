/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ScratchCardComponent } from './scratch-card.component';

describe('ScratchCardComponent', () => {
  let component: ScratchCardComponent;
  let fixture: ComponentFixture<ScratchCardComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScratchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScratchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
