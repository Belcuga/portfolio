import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MobileNavComponent } from './shared/components/mobile-nav/mobile-nav.component';
import { AppOpenRevealComponent } from './shared/app-open-reveal/app-open-reveal.component';
import { ThemeService } from './core/services/theme.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    MobileNavComponent,
    AppOpenRevealComponent
  ],
  templateUrl: './app.component.html',
  styles: [`
    :host {
      display: block;
      width: 100%;
      min-height: 100vh;
    }
    .main-content {
      display: block;
      width: 100%;
      min-height: 100vh;
      background-color: var(--bg-primary);
      transition: background-color 0.3s ease;
    }
    .page-content {
      width: 100%;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'milan-portfolio';

  constructor(
    private router: Router, 
    private ngZone: NgZone,
    private themeService: ThemeService
  ) {
    this.themeService.currentTheme();
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (typeof document !== 'undefined') {
          this.ngZone.runOutsideAngular(() => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          });
        }
      });
  }
}
