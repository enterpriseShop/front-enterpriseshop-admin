import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailProductsComponent } from './thumbnail-products.component';

describe('ThumbnailProductsComponent', () => {
  let component: ThumbnailProductsComponent;
  let fixture: ComponentFixture<ThumbnailProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThumbnailProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThumbnailProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
