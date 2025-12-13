import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  images: string[];
  technologies: string[];
  liveLink?: string;
  codeLink?: string;
  icon: string;
}

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | null = null;
  projectId: string | null = null;

  private projects: Project[] = [
    {
      id: 'logiclash',
      title: 'LogiClash',
      tagline: 'Real-time 1v1 quiz game',
      description: 'Inspired by TV show Slagalica, built with Angular and Node.js.',
      fullDescription: 'LogiClash is a real-time 1v1 quiz game inspired by the popular TV show Slagalica. Built with Angular and Node.js, it features real-time game modes, Supabase for data storage, and Socket.IO for real-time communication. Players can compete head-to-head in various quiz challenges with live updates and instant feedback.',
      images: ['assets/images/portfolio.png'], // Add actual images when available
      technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'Socket.IO'],
      icon: '🎮'
    },
    {
      id: 'tipsy-trials',
      title: 'Tipsy Trials',
      tagline: 'Fun browser-based party game',
      description: 'Simple party game made for friends, built in Next.js/React with Tailwind CSS.',
      fullDescription: 'Tipsy Trials is a fun browser-based party game designed for friends to enjoy together. Built with Next.js/React and Tailwind CSS, it uses Supabase for storage and features custom admin panels for content management. The game focuses on creating memorable moments with friends through interactive challenges and questions.',
      images: ['assets/images/tipsy_trials.png'],
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Supabase'],
      liveLink: 'https://www.tipsytrials.com/',
      icon: '🎉'
    },
    {
      id: 'client-ecommerce',
      title: 'Client E-commerce Sites',
      tagline: 'WordPress & Shopify websites',
      description: 'Multiple e-commerce and marketing sites built for clients.',
      fullDescription: 'A collection of e-commerce and marketing websites built for various clients using WordPress and Shopify. These projects focused on performance optimization, SEO best practices, and conversion rate improvements. Each site was customized to meet specific client needs while maintaining modern design standards and excellent user experience.',
      images: ['assets/images/portfolio.png'], // Add actual images when available
      technologies: ['WordPress', 'Shopify', 'SCSS', 'SEO'],
      icon: '🛒'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
      if (this.projectId) {
        this.project = this.projects.find(p => p.id === this.projectId) || null;
        if (!this.project) {
          this.router.navigate(['/projects']);
        }
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/projects']);
  }
}







