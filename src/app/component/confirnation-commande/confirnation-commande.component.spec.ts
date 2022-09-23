import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirnationCommandeComponent } from './confirnation-commande.component';

describe('ConfirnationCommandeComponent', () => {
  let component: ConfirnationCommandeComponent;
  let fixture: ComponentFixture<ConfirnationCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirnationCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirnationCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
