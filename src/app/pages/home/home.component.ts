import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideFromLeft', [
      state('hidden', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate('800ms ease-out')
      ])
    ]),
    trigger('slideFromRight', [
      state('hidden', style({ transform: 'translateX(100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate('800ms ease-out')
      ])
    ]),
    trigger('slideFromBottom', [
      state('hidden', style({ transform: 'translateY(100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class HomeComponent {
  animationState = 'hidden';

  ngOnInit() {
    // Start animation after a small delay to ensure the splash screen is gone
    setTimeout(() => {
      this.animationState = 'visible';
    }, 100);
  }
}