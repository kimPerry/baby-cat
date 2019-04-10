import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenListPage } from './kitten-list.page';

describe('KittenListPage', () => {
  let component: KittenListPage;
  let fixture: ComponentFixture<KittenListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KittenListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KittenListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
