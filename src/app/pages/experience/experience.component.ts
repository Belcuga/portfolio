import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [CommonModule, RevealOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Paprikart',
      role: 'Frontend Developer',
      dates: 'October 2021 - May 2025',
      location: 'Hybrid (Leskovac + Remote)',
      teamSize: undefined,
      summary: 'Worked as a key frontend engineer on large Angular applications, including a social media web app and several internal tools for solar installation companies (under NDA). Focused on building highly interactive features, real time communication, and scalable architecture with best practices that improved performance, UX, and long term maintainability.',
      technologies: ['Angular 2+', 'TypeScript', 'RxJS', 'NgRx', 'SCSS', 'REST APIs', 'Socket.IO', 'Chart.js', 'pdf-lib', 'Git', 'Jira'],
      points: [
        'Developed and maintained Angular SPAs with feeds, profiles, and rich post interactions',
        'Built complex components including:',
        '**Video & audio recorder**, media player, and upload system with validation + progress',
        '**Real time messenger** using Socket.IO',
        '**Interactive maps** and location based features',
        '**Advanced input components** with custom formats + validation',
        'Created **data visualizations** using Chart.js and **PDF generation** with pdf-lib',
        'Integrated secure REST API flows, auth, and robust error handling',
        'Used NgRx + RxJS to manage complex state and asynchronous streams cleanly',
        'Refactored legacy code into modular architecture with feature modules & improved UX',
        'Performance optimization: lazy loading, change detection, smaller bundles, better Lighthouse scores',
        'Implemented UI consistency with Angular Material + custom SCSS design system',
        'Participated in code reviews, sprint planning, and directly collaborated with backend + clients'
      ],
      highlights: [
        'Implemented a real time messenger',
        'Built a complex media recording + upload',
        'Delivered major performance improvements (lazy loading, bundle optimization, change detection tuning)',
        'Led an architectural refactor of shared components and feature modules'
      ]
    },
    {
      company: 'Freelance',
      role: 'Web Developer',
      dates: 'May 2025 - Present',
      location: 'Remote',
      teamSize: undefined,
      summary: 'I freelance as a web developer helping clients launch and improve modern websites with WordPress and Shopify. I work directly with business owners, from gathering requirements to delivering polished, performant and easy to maintain solutions.',
      technologies: ['WordPress', 'Shopify', 'Elementor', 'MemberPress', 'CSS', 'PHP Snippets', 'Performance Optimization'],
      points: [
        'Delivered WordPress websites for real estate and personal brands',
        'Built Shopify storefronts with products, payments & shipping setup',
        'Implemented custom dashboards and gated content for a fitness brand using MemberPress',
        'Customized themes with CSS + PHP enhancements for more professional branding',
        'Improved site performance and loading times, boosting mobile UX',
        'Managed hosting, domains and DNS configurations',
        'Provided ongoing support and documentation for clients',
        'Communicated directly with clients and delivered work on schedule'
      ],
      highlights: [
        'Improved website performance and branding for multiple businesses, helping them present more professional products to customers.'
      ]
    }
  ];

  formatPoint(point: string): string {
    // Convert **text** to <strong>text</strong> for bold formatting
    return point.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  }
}
