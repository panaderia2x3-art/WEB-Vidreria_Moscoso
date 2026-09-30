import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioPolicarbonato } from './servicio-policarbonato';

describe('ServicioPolicarbonato', () => {
  let component: ServicioPolicarbonato;
  let fixture: ComponentFixture<ServicioPolicarbonato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioPolicarbonato],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicioPolicarbonato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
