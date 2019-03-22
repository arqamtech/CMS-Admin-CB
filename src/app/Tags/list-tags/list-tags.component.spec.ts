import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTagsComponent } from './list-tags.component';

describe('ListTagsComponent', () => {
  let component: ListTagsComponent;
  let fixture: ComponentFixture<ListTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTagsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
