import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductavbarComponent } from './productavbar.component';

describe('ProductavbarComponent', () => {
  let component: ProductavbarComponent;
  let fixture: ComponentFixture<ProductavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
