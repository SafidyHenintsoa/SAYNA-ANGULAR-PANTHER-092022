import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WakandaComponent } from './wakanda.component';

describe('WakandaComponent', () => {
  let component: WakandaComponent;
  let fixture: ComponentFixture<WakandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WakandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WakandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
