import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [
    trigger('slideFromBottom', [
      state('hidden', style({ transform: 'translateY(50%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate('800ms ease-out')
      ])
    ]),
  ]
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Frontend Developer',
      company: 'PaprikArt',
      period: 'Oct 2021 - May 2025',
      description: ``,
      points: [
        'Developed and maintained scalable applications using Angular and TypeScript',
        'Built reusable UI components with Angular and Material UI, ensuring consistency and faster development cycles',
        'Implemented state management using NgRx for complex application states and enhanced app performance',
        'Integrated REST APIs and handled reactive data streams with RxJS',
        'Engineered interactive data visualizations using Chart.js and developed PDF export features with pdf-lib',
        'Collaborated closely with UX/UI designers (Figma) for pixel-perfect, responsive designs',
        'Participated in Agile processes (Jira, ActiveCollab), code reviews, and sprint planning',
        'Led cross-browser testing and accessibility improvements',
        'Reduced app load time by 30% through code splitting and lazy loading'
      ]
    },
  ];

  animationState = 'hidden';

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'visible';
    }, 100);
  }
}
