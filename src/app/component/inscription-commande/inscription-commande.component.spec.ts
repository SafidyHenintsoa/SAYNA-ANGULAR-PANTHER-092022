import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCommandeComponent } from './inscription-commande.component';

describe('InscriptionCommandeComponent', () => {
  let component: InscriptionCommandeComponent;
  let fixture: ComponentFixture<InscriptionCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
