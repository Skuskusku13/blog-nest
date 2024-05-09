import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConexInscComponent } from './conex-insc.component';

describe('ConexInscComponent', () => {
  let component: ConexInscComponent;
  let fixture: ComponentFixture<ConexInscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConexInscComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConexInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
