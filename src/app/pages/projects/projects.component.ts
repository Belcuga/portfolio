import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, RouterModule, RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      id: 'logiclash',
      route: '/projects/logiclash',
      title: 'LogiClash',
      description: 'Real-time 1v1 quiz game inspired by TV show Slagalica, built with Angular and Node.js.',
      image: 'assets/images/pocetna_logiclash.png',
      technologies: ['angular-icon.svg', 'typescript-icon.svg', 'html-icon.svg', 'css-icon.svg']
    },
    {
      id: 'tipsy-trials',
      route: '/projects/tipsy-trials',
      title: 'Tipsy Trials',
      description: 'Fun browser-based party game made for friends, built in Next.js/React with Tailwind CSS.',
      image: 'assets/images/pocetna_tipsytrials.png',
      technologies: ['react-icon.svg', 'nextjs-icon.svg', 'html-icon.svg', 'tailwind-icon.svg']
    }
  ];

}
