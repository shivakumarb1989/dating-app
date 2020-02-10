/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppValueComponent } from './app-value.component';

describe('AppValueComponent', () => {
  let component: AppValueComponent;
  let fixture: ComponentFixture<AppValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
