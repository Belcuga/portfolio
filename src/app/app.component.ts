import { Component, NgZone } from '@angular/core';
import { SplashScreenComponent } from './pages/home/splash-screen/splash-screen.component';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SplashScreenComponent, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
    .main-content {
      min-height: 100vh;
      background: #121212;
    }
  `]
})
export class AppComponent {
  title = 'milan-portfolio';
  showSplash = true;

  constructor(private router: Router, private ngZone: NgZone) { }

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
