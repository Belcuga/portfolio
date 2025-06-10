import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
 name = '';
  email = '';
  message = '';

  sendMessage() {
    console.log('Sending message:', {
      name: this.name,
      email: this.email,
      message: this.message
    });
    // Here you can later hook up an email service or API
  }
}
