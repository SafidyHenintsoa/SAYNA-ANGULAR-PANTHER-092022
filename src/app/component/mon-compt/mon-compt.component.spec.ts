import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComptComponent } from './mon-compt.component';

describe('MonComptComponent', () => {
  let component: MonComptComponent;
  let fixture: ComponentFixture<MonComptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonComptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
