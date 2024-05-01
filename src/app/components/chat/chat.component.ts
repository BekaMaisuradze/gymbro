import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { delay } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  @ViewChild('messages') private myScrollContainer!: ElementRef;

  question = '';
  chatData: string[] = [];
  loading = false;

  constructor(private chatService: ChatService) { }

  generateText() {
    if (!this.question?.trim()) {
      return;
    }

    this.addMessage(this.question);

    this.loading = true;
    this.chatService.generateText(this.question).then(response => {
      if (response?.choices?.length && response.choices[0].message?.content) {
        this.addMessage(response.choices[0].message.content!);
        this.loading = false;
      }
    });

    this.question = '';
  }


  private addMessage(message: string) {
    this.chatData.push(message);
    setTimeout(() => {
      this.scrollToBottom();
    }, 0);
  }

  private scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
