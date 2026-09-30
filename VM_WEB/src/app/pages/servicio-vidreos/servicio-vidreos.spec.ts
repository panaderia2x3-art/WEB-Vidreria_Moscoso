import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicioVidreos } from './servicio-vidreos';

describe('ServicioVidreos', () => {
  let component: ServicioVidreos;
  let fixture: ComponentFixture<ServicioVidreos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicioVidreos],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicioVidreos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
