import { Component, NgZone } from '@angular/core';
import { SplashScreenComponent } from './pages/home/splash-screen/splash-screen.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MobileNavComponent } from './shared/components/mobile-nav/mobile-nav.component';
import { ThemeService } from './core/services/theme.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SplashScreenComponent, RouterOutlet, HeaderComponent, FooterComponent, MobileNavComponent],
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
export class AppComponent {
  title = 'milan-portfolio';
  showSplash = true;

  constructor(
    private router: Router, 
    private ngZone: NgZone,
    private themeService: ThemeService
  ) {
    // Initialize theme service
    this.themeService.currentTheme();
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (typeof document !== 'undefined') {
          this.ngZone.runOutsideAngular(() => {
            // TODO: find better way but make sure it works on all browsers
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          });
        }
      });
  }

  onSplashComplete() {
    this.showSplash = false;
  }
}
