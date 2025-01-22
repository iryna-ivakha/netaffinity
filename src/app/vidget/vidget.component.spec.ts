import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidgetComponent } from './vidget.component';

describe('VidgetComponent', () => {
  let component: VidgetComponent;
  let fixture: ComponentFixture<VidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
