import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationBanner } from './collaboration-banner';

describe('CollaborationBanner', () => {
  let component: CollaborationBanner;
  let fixture: ComponentFixture<CollaborationBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollaborationBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
