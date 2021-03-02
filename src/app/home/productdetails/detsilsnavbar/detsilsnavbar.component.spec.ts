import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetsilsnavbarComponent } from './detsilsnavbar.component';

describe('DetsilsnavbarComponent', () => {
  let component: DetsilsnavbarComponent;
  let fixture: ComponentFixture<DetsilsnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetsilsnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetsilsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
