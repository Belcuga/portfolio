import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

    projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio website, built with Angular and TypeScript. Showcases my skills, projects, and experience.',
      image: '',
      link: '#'
    },
  ];

}
