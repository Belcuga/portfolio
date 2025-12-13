import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  email = 'djordjevic.milan13@gmail.com';
  linkedInUrl = 'https://www.linkedin.com/in/milandjordjevic00/';
  githubUrl = 'https://github.com/Belcuga';
  
  showToast = signal(false);
  toastTimeout: any;

  badges = [
    'Open to remote roles',
    'Angular / TypeScript',
    'React / Next.js',
    'Full-stack friendly',
    'CET timezone'
  ];

  copyEmail(): void {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(this.email).then(() => {
        this.showToastMessage();
      }).catch(() => {
        // Fallback for older browsers
        this.fallbackCopyEmail();
      });
    } else {
      this.fallbackCopyEmail();
    }
  }

  private fallbackCopyEmail(): void {
    const textArea = document.createElement('textarea');
    textArea.value = this.email;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      this.showToastMessage();
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
    document.body.removeChild(textArea);
  }

  private showToastMessage(): void {
    this.showToast.set(true);
    if (this.toastTimeout) {
      clearTimeout(this.toastTimeout);
    }
    this.toastTimeout = setTimeout(() => {
      this.showToast.set(false);
    }, 1500);
  }

  getEmailLink(): string {
    const subject = encodeURIComponent("Let's work together");
    const body = encodeURIComponent('Hi Milan,\n\n');
    return `mailto:${this.email}?subject=${subject}&body=${body}`;
  }

  downloadResume(): void {
    const fileUrl = '/assets/docs/MILAN DJORDJEVIC RESUME.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'MILAN DJORDJEVIC RESUME';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
