import { Component } from '@angular/core';
import { ProjectDetailLayoutComponent, ProjectHero, ProjectFeature, ProjectTechStack, ProjectScreenshot, ProjectRoadmapItem } from '../../../shared/components/project-detail-layout/project-detail-layout.component';

@Component({
  selector: 'app-logiclash-project',
  standalone: true,
  imports: [ProjectDetailLayoutComponent],
  templateUrl: './logiclash-project.component.html',
  styleUrl: './logiclash-project.component.scss'
})
export class LogiclashProjectComponent {
  hero: ProjectHero = {
    title: 'LogiClash',
    tagline: 'Real-time 1v1 quiz & puzzle platform inspired by Slagalica',
    metaBadges: ['Full-stack', 'Real-time multiplayer', '6 Mini games', 'Passion project'],
    oneLiner: 'A full-stack real-time multiplayer quiz and puzzle platform with multiple game modes, live matchmaking, and fast logic-based duels. Players can challenge friends or play solo in word, number, quiz, and association-based games — all running in a fully responsive Angular frontend.',
    ctaButtons: {
      primary: {
        label: 'View Live App',
        url: 'https://www.logiclash.com',
        external: true
      },
      secondary: {
        label: 'View on GitHub',
        url: 'https://github.com/Belcuga/logiclash', // TODO: Update with actual URL
        external: true
      },
      tertiary: {
        label: 'Back to all projects',
        route: '/projects'
      }
    },
    heroImage: {
      src: 'assets/images/pocetna_logiclash.png',
      alt: 'LogiClash main interface',
      techLabels: ['Angular 19', 'Node.js', 'Supabase', 'Socket.IO']
    }
  };

  overview = `
    <p>LogiClash is a real-time multiplayer quiz and puzzle platform inspired by the classic TV show “Slagalica.” It supports friend challenges, matchmaking, and solo play across multiple game modes. The app features live score tracking, round transitions, and persistent player data stored in Supabase.</p>
    <p>As a full-stack web application, LogiClash combines a real-time game server, persistent Supabase storage, and a responsive Angular frontend designed for fast interactions.</p>
  `;

  features: ProjectFeature[] = [
    { title: 'Letters Game', description: 'Create valid words from a given set of letters under time pressure.' },
    { title: 'Numbers Game', description: 'Combine numbers using arithmetic operations to reach a target number.' },
    { title: 'Linkup Game', description: 'Match related items from two columns before the timer runs out.' },
    { title: 'Quiz Game', description: '10-question, multiple-choice quiz rounds with speed-based scoring.' },
    { title: 'Code Cracker', description: 'Mastermind-style code-breaking with color-coded feedback for each guess.' },
    { title: 'Associations Game', description: 'Turn-based word association guessing game where players reveal clues and try to guess the hidden concept.' }
  ];

  additionalFeatures: string[] = [
    'Real-time 1v1 multiplayer using WebSockets (Socket.IO).',
    'Friend system to add friends, see who\'s online, and send game invitations.',
    'Multi-round match system with randomized game types.',
    'Scoring based on correctness, speed, and mode-specific rules.',
    'Match history and ability to resume games after refresh.',
    'Responsive UI designed for both desktop and mobile.'
  ];

  techStack: ProjectTechStack = {
    frontend: [
      'Angular 19, TypeScript, NgRx for predictable state management.',
      'RxJS for reactive streams and real-time updates.',
      'Socket.IO client for live game state sync.',
      'Angular Material and custom SCSS for UI.',
      'Responsive layout with animated timers and visual feedback for game states.'
    ],
    backend: [
      'Node.js with Express.js REST API.',
      'Socket.IO server for room management and real-time events.',
      'Supabase (PostgreSQL) for persistence (users, friends, matches, rounds, history).',
      'JWT-based authentication with bcrypt password hashing.',
      'SSR support for better performance and SEO (if present in the repo).'
    ],
    highlight: 'Multi-round real-time matches, synced via Socket.IO and coordinated with NgRx on the frontend.'
  };

  role = `
    <p>I designed and built LogiClash end to end: frontend, backend, database design, and real-time game logic.</p>
  `;

  roleBullets: string[] = [
    'Designing the game modes and match flow.',
    'Implementing the Angular UI, state management, and responsive layouts.',
    'Building the Node.js/Express backend, Socket.IO events, and Supabase schema.',
    'Setting up authentication, authorization and secure password handling.',
    'Managing deployments and environment configuration.'
  ];

  collaborationNote = 'The current UI is a functional first design. I\'m actively looking for a designer to collaborate with on a refreshed visual style.';

  challenges: string[] = [
    'Synchronizing game state between clients and the server in real-time while keeping NgRx store consistent.',
    'Designing a flexible data model for matches, rounds, and different game modes.',
    'Handling reconnects and page refreshes without losing game progress.',
    'Balancing performance with clarity in the UI, especially around timers and live updates.'
  ];

  screenshots: ProjectScreenshot[] = [
    { src: 'assets/images/code_logiclash.png', alt: 'Code cracker game', caption: 'Code cracker game' },
    { src: 'assets/images/solo_logiclash.png', alt: 'Letters game', caption: 'Letters game, Solo play' },
    { src: 'assets/images/friends_logiclash.png', alt: 'Friends', caption: 'Friends interface' },
    { src: 'assets/images/associations_logiclash.png', alt: 'Associations', caption: 'Associations' }
  ];

  roadmap: ProjectRoadmapItem[] = [
    { text: 'Native Android and iOS versions based on the existing web app.', completed: false },
    { text: 'A full UI/UX redesign in collaboration with a designer.', completed: false },
    { text: 'A simple marketing and onboarding funnel to make it easier for new players to join matches.', completed: false }
  ];

  finalCta = {
    text: 'Interested in real time apps, game like products, or Angular/Node projects? Feel free to reach out - I\'d love to chat.',
    buttons: [
      { label: 'Play LogiClash', url: 'https://www.logiclash.com', external: true },
      { label: 'View Source', url: 'https://github.com/Belcuga/logiclash', external: true },
      { label: 'Contact Me', route: '/contact' }
    ]
  };
}




