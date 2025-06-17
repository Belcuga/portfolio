import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '150px',
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('closed', style({
        width: '0',
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('closed => open', [
        animate('300ms ease-out')
      ]),
      transition('open => closed', [
        animate('300ms ease-in')
      ]),
    ]),
    trigger('backdropFade', [
      state('hidden', style({ opacity: 0, display: 'none' })),
      state('visible', style({ opacity: 1, display: 'flex' })),
      transition('hidden => visible', [animate('200ms ease-in')]),
      transition('visible => hidden', [animate('200ms ease-out')])
    ])
  ],
})
export class HeaderComponent {
  isSidebarOpen = false;
  isMobile = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.isSidebarOpen = false; // close sidebar if switching to desktop
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  downloadResume() {
    const fileUrl = '/assets/docs/MILAN DJORDJEVIC RESUME.pdf';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'MILAN DJORDJEVIC RESUME';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeSidebar();
  }
}
