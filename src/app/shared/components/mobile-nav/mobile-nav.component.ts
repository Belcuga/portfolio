import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  isMobile = false;
  activeRoute = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkScreenSize();
    this.updateActiveRoute(this.router.url);

    // Listen to route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updateActiveRoute(event.url);
      });
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  updateActiveRoute(url: string) {
    if (url === '/' || url === '') {
      this.activeRoute = 'home';
    } else {
      this.activeRoute = url.substring(1).split('/')[0] || 'home';
    }
  }

  navigateTo(route: string): void {
    if (route === 'home') {
      this.router.navigate(['/']);
    } else {
      this.router.navigate([`/${route}`]);
    }
  }
}

