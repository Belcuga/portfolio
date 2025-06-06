import { Component } from '@angular/core';
import { SplashScreenComponent } from './pages/home/splash-screen/splash-screen.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SplashScreenComponent, RouterOutlet],
  template: `
    <app-splash-screen 
      *ngIf="showSplash" 
      (animationComplete)="onSplashComplete()">
    </app-splash-screen>
    <div *ngIf="!showSplash" class="main-content">
      <router-outlet></router-outlet>
    </div>
  `,
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
