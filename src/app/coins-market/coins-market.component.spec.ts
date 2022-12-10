import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsMarketComponent } from './coins-market.component';

describe('CoinsMarketComponent', () => {
  let component: CoinsMarketComponent;
  let fixture: ComponentFixture<CoinsMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinsMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoinsMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
