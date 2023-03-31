import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOfProductsComponent } from './data-of-products.component';

describe('DataOfProductsComponent', () => {
  let component: DataOfProductsComponent;
  let fixture: ComponentFixture<DataOfProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataOfProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
