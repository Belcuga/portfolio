import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1200ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('800ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    trigger('staggerFadeIn', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class SplashScreenComponent {
  @Output() animationComplete = new EventEmitter<void>();
  showContent = false;
  isVisible = true;

  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 500);
  }

  onEnterClick() {
    this.isVisible = false;
    setTimeout(() => {
      this.animationComplete.emit();
    }, 800);
  }
}
