import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

export interface TechItem {
  name: string;
  icon: string; // path to svg/png
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule, RevealOnScrollDirective, RouterModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent {
  constructor(private router: Router) {}

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If element not found, try navigating to projects route
      if (id === 'projects') {
        this.router.navigate(['/projects']);
      }
    }
  }

  coreFrontend: TechItem[] = [
    { name: 'Angular', icon: 'assets/images/angular-icon.svg' },
    { name: 'TypeScript', icon: 'assets/images/typescript-icon.svg' },
    { name: 'JavaScript', icon: 'assets/images/javascript-icon.svg' },
    { name: 'RxJS', icon: 'assets/images/rxjs-icon.svg' },
    { name: 'NgRx', icon: 'assets/images/ngrx-icon.svg' },
    { name: 'HTML', icon: 'assets/images/html-icon.svg' },
    { name: 'SCSS', icon: 'assets/images/css-icon.svg' }
  ];

  backendData: TechItem[] = [
    { name: 'Node.js', icon: 'assets/images/nodejs-icon.svg' },
    { name: 'Supabase', icon: 'assets/images/supabase-icon.svg' },
    { name: 'PostgreSQL', icon: 'assets/images/postgresql-icon.svg' },
    { name: 'Docker', icon: 'assets/images/docker-icon.svg' }
  ];

  toolsPlatforms: TechItem[] = [
    { name: 'Git', icon: 'assets/images/git-icon.svg' },
    { name: 'Figma', icon: 'assets/images/figma-icon.svg' },
    { name: 'WordPress', icon: 'assets/images/wordpress-icon.svg' },
    { name: 'Shopify', icon: 'assets/images/shopify-icon.svg' },
    { name: 'Jira', icon: 'assets/images/jira-icon.svg' },
    { name: 'Bitbucket', icon: 'assets/images/bitbucket-icon.svg' }
  ];

  alsoWorkedWith: TechItem[] = [
    { name: 'React', icon: 'assets/images/react-icon.svg' },
    { name: 'Next.js', icon: 'assets/images/nextjs-icon.svg' },
    { name: 'Tailwind CSS', icon: 'assets/images/tailwind-icon.svg' }
  ];
}

