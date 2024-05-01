import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-how-it-works-step',
  templateUrl: './how-it-works-step.component.html',
  styleUrls: ['./how-it-works-step.component.scss']
})
export class HowItWorksStepComponent {
  @Input() step: {
    step_num: number; 
    illustration_uri: string; 
    title: string; 
    subtitle: string;
    type: string
  } = {
    step_num: 0, 
    illustration_uri: '', 
    title: '', 
    subtitle: '',
    type: 'middle',
  };
}
