import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMobile = false;

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.checkScreenSize();
  }

  get currentTheme() {
    return this.themeService.currentTheme;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
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
}
