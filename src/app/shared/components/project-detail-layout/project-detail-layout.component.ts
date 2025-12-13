import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

export interface ProjectHero {
  title: string;
  tagline: string;
  metaBadges: string[];
  oneLiner: string;
  ctaButtons: {
    primary?: { label: string; url: string; external?: boolean };
    secondary?: { label: string; url: string; external?: boolean };
    tertiary?: { label: string; route: string };
  };
  heroImage?: {
    src: string;
    alt: string;
    techLabels?: string[];
  };
}

export interface ProjectFeature {
  title: string;
  description?: string;
}

export interface ProjectTechStack {
  frontend: string[];
  backend: string[];
  highlight?: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectRoadmapItem {
  text: string;
  completed?: boolean;
  highlighted?: boolean;
}

export interface PartyStat {
  text: string;
}

@Component({
  selector: 'app-project-detail-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, RevealOnScrollDirective],
  templateUrl: './project-detail-layout.component.html',
  styleUrl: './project-detail-layout.component.scss'
})
export class ProjectDetailLayoutComponent {
  @Input() hero!: ProjectHero;
  @Input() overview?: string;
  @Input() features?: ProjectFeature[];
  @Input() additionalFeatures?: string[];
  @Input() techStack?: ProjectTechStack;
  @Input() role?: string;
  @Input() roleBullets?: string[];
  @Input() collaborationNote?: string;
  @Input() challenges?: string[];
  @Input() screenshots?: ProjectScreenshot[];
  @Input() partyStats?: PartyStat[];
  @Input() roadmap?: ProjectRoadmapItem[];
  @Input() finalCta?: {
    text: string;
    buttons: {
      label: string;
      url?: string;
      route?: string;
      external?: boolean;
    }[];
  };
}




