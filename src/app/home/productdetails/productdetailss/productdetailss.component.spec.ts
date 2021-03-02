import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailssComponent } from './productdetailss.component';

describe('ProductdetailssComponent', () => {
  let component: ProductdetailssComponent;
  let fixture: ComponentFixture<ProductdetailssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductdetailssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductdetailssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
