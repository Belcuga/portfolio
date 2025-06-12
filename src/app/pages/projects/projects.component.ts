import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
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
      state('hidden', style({ transform: 'translateY(50%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate('800ms ease-out')
      ])
    ]),
    trigger('slideFromTop', [
      state('hidden', style({ transform: 'translateY(-100%)', opacity: 0 })),
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('hidden => visible', [
        animate('800ms ease-out')
      ])
    ])
  ]
})
export class ProjectsComponent {

  projects = [
    {
      id: 'portfolio-site',
      title: 'Portfolio Website',
      description: 'My personal portfolio website, built with Angular and TypeScript. Showcases my skills, projects, and experience.',
      image: 'assets/images/portfolio.png',
      link: '',
      technologies: ['angular-icon.svg', 'typescript-icon.svg', 'html-icon.svg', 'css-icon.svg'],
      points: [
        'Built using Angular',
      ]
    },
    {
      id: 'tipsy-trials',
      title: 'Tipsy Trials',
      description: 'The wild, hilarious and slightly inappropriate party game where your choices are simple: answer the question, do the challenge or take a drink.',
      image: 'assets/images/tipsy_trials.png',
      link: 'https://www.tipsytrials.com/',
      technologies: ['react-icon.svg', 'nextjs-icon.svg', 'html-icon.svg', 'tailwind-icon.svg'],
      points: [
        'Built using React (Next.js), Tailwind CSS, Supabase',
        'Handled full project lifecycle including coding, deployment, and maintenance',
        'Developed custom admin panels for content management',
        'Integrated Google Analytics for tracking',
        'Focused on SEO, performance optimization, and mobile responsiveness',
        'Collaborated with team members using Asana for task management and coordination',
        'Developed Android/iOS versions using React Native',
        'Coming soon on Google Play'
      ]
    },
  ];

  animationState = 'hidden';

  @ViewChildren('experienceCard', { read: ElementRef })
  experienceCardElements!: QueryList<ElementRef>;

  visibleStates: boolean[] = [];
  experienceVisibleStates: boolean[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.animationState = 'visible';
    }, 100);
  }

  ngAfterViewInit(): void {
    this.visibleStates = Array(this.projects.length).fill(false);

    this.experienceCardElements.forEach((elRef, index) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.experienceVisibleStates[index] = true;
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.1 });

      observer.observe(elRef.nativeElement);
    });
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }

  stopPropogation(event: Event) {
    event.stopPropagation();
  }

}
