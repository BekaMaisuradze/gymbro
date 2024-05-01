import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowItWorksStepComponent } from './how-it-works-step.component';

describe('HowItWorksStepComponent', () => {
  let component: HowItWorksStepComponent;
  let fixture: ComponentFixture<HowItWorksStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowItWorksStepComponent]
    });
    fixture = TestBed.createComponent(HowItWorksStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
