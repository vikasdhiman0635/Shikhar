import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindescComponent } from './maindesc.component';

describe('MaindescComponent', () => {
  let component: MaindescComponent;
  let fixture: ComponentFixture<MaindescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
