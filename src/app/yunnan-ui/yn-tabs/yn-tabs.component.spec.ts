/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YnTabsComponent } from './yn-tabs.component';

describe('YnTabsComponent', () => {
  let component: YnTabsComponent;
  let fixture: ComponentFixture<YnTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YnTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YnTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
