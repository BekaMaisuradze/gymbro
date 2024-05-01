import { Injectable } from '@angular/core';
import OpenAI from 'openai';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: '',
      dangerouslyAllowBrowser: true
    });
  }

  generateText(prompt: string) {
    return this.openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: prompt }],
      // max_tokens: 256
    });
  }
}
