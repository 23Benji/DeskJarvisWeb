import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroGaming } from './retro-gaming';

describe('RetroGaming', () => {
  let component: RetroGaming;
  let fixture: ComponentFixture<RetroGaming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetroGaming]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetroGaming);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
