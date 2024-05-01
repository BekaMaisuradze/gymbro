import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(private router: Router) { }

  onTryClick() {
    this.router.navigate(['/sign-up']);
  }

  team = [
    { 
      name: "David Chanturia", 
      position: "CEO", 
      experience: 'Toptal, Forbes, ex Fotrune-500 tech lead', 
      image_uri: 'assets/images/data-profile.jpeg',
      linkedin_url: 'https://www.linkedin.com/in/datachanturia',
      instagram_url: 'https://www.instagram.com/datachanturia',
    },
    { 
      name: "Beqa Maisuradze", 
      position: "CTO", 
      experience: 'Toptal, HR.ge, Master\'s candidate in AI', 
      image_uri: 'assets/images/beka-profile.jpg',
      linkedin_url: 'https://www.linkedin.com/in/beka-maisuradze-81a828112/',
      instagram_url: 'https://www.instagram.com/b_maisu', 
    }
  ]

  steps = [
    { step_num: 1, type: 'first', illustration_uri: 'assets/illustrations/purchase-subscription.svg', title: 'Purchase Subscribtion', subtitle: 'With few clicks subscribe to the service.' },
    { step_num: 2, type: 'middle', illustration_uri: 'assets/illustrations/chat-with-assistant.svg', title: 'Chat With the Assistant', subtitle: 'You just ask questions and expect answers based on tens of thousands of pages assistant read for you.' },
    { step_num: 3, type: 'last', illustration_uri: 'assets/illustrations/get-questions.svg', title: 'Get Unlimited Questions', subtitle: 'If amount of questions are not enough, you can always buy more questions.' },
  ]
}
