import { Component } from '@angular/core';
import { SplashScreenComponent } from './pages/home/splash-screen/splash-screen.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

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

  onSplashComplete() {
    this.showSplash = false;
  }
}
