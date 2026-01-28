import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boot } from './boot';

describe('Boot', () => {
  let component: Boot;
  let fixture: ComponentFixture<Boot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
