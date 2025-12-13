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
    tagline: 'real time 1v1 quiz & puzzle platform inspired by Slagalica',
    metaBadges: ['Full stack', 'real time multiplayer', '6 mini games', 'Socket.IO powered', 'Passion project'],
    oneLiner: 'A full stack real time multiplayer quiz and puzzle platform built with Angular 19, Node.js, Supabase and Socket.IO. LogiClash features 6 mini games, live matchmaking, and fast 1v1 logic duels, all running with smooth real time sync and a fully responsive Angular frontend.',
    ctaButtons: {
      primary: {
        label: 'View Live App',
        url: 'https://www.logiclash.com',
        external: true
      },
      secondary: {
        label: 'View on GitHub',
        url: 'https://github.com/Belcuga/quizapp', // TODO: Update with actual URL
        external: true
      }
    },
    heroImage: {
      src: 'assets/images/pocetna_logiclash.png',
      alt: 'LogiClash main interface',
      techLabels: ['Angular 19', 'Node.js', 'Supabase', 'Socket.IO']
    }
  };

  overview = `
    <p>LogiClash is a real time multiplayer quiz and puzzle platform inspired by the classic TV show "Slagalica." It supports friend challenges, matchmaking, and solo play across multiple game modes, with fast paced rounds and time pressure.</p>
    <p>The app features live score tracking, round transitions, different game types, and persistent player data stored in Supabase so players can resume matches and keep their history.</p>
    <p>As a full stack web application, LogiClash combines a Node.js + Socket.IO game server, Supabase (PostgreSQL) for persistence, and a responsive Angular 19 frontend designed for fast interactions and clear feedback.</p>
  `;

  features: ProjectFeature[] = [
    { title: 'Letters Game', description: 'Create valid words from a given set of letters under time pressure, competing on both speed and accuracy.' },
    { title: 'Numbers Game', description: 'Combine numbers using arithmetic operations to reach a target number before the timer runs out.' },
    { title: 'Linkup Game', description: 'Match related items from two columns as quickly as possible, without penalties for incorrect guesses.' },
    { title: 'Quiz Game', description: '10 question multiple choice quiz rounds with scoring based on correctness and answer speed.' },
    { title: 'Code Cracker', description: 'Mastermind style code breaking game with color coded feedback for each guess, requiring deduction and thinking.' },
    { title: 'Associations Game', description: 'Turn based word association game where players reveal clues and try to guess the hidden concept before their opponent.' }
  ];

  additionalFeatures: string[] = [
    'Real time 1v1 multiplayer using WebSockets (Socket.IO).',
    'Friend system to add players, see who\'s online, and send game invitations.',
    'Multi round match system with different game types and configurable rules.',
    'Scoring based on correctness, speed, and mode specific rules.',
    'Match history and the ability to resume games after refresh or reconnect.',
    'Optimized Socket.IO event flow to minimize duplicate events and reduce latency spikes.',
    'Client side state restoring to keep game progress consistent after page reloads.',
    'Responsive UI designed for both desktop and mobile.'
  ];

  techStack: ProjectTechStack = {
    frontend: [
      'Angular 19, TypeScript, and NgRx for predictable state management.',
      'RxJS for reactive streams and real time updates.',
      'Socket.IO client for live game state sync between players.',
      'Custom puzzle and scoring logic implemented per game mode.',
      'Angular Material and custom SCSS for UI components.',
      'Responsive layout with animated timers and visual feedback for game states.'
    ],
    backend: [
      'Node.js with an Express.js REST API.',
      'Socket.IO server for room management, matchmaking, and real time events.',
      'Supabase (PostgreSQL) for persistence (users, friends, matches, rounds, history).',
      'JWT based authentication with bcrypt password hashing.',
      'Server side rendering (SSR) support for better initial load performance and SEO.'
    ],
    highlight: 'Multi round real time matches, synced via Socket.IO and coordinated with NgRx on the frontend.'
  };

  role = `
    <p>I designed and built LogiClash end to end, including the frontend, backend, real time game logic, and database architecture.</p>
  `;

  roleBullets: string[] = [
    'Designing the game modes, match flow, and multi round structure.',
    'Implementing the Angular UI, NgRx state management, and responsive layouts.',
    'Building the Node.js/Express backend, Socket.IO events, and Supabase schema.',
    'Setting up authentication, authorization, and secure password handling.',
    'Managing deployments, environment configuration, and monitoring.'
  ];

  collaborationNote = 'The current UI is a functional first design. A future visual refresh is planned to further polish the overall look and feel.';

  challenges: string[] = [
    'Synchronizing game state between clients and the server in real time while keeping the NgRx store consistent.',
    'Designing a flexible data model for matches, rounds, and different game modes that can evolve over time.',
    'Handling reconnects and page refreshes without losing game progress or desynchronizing players.',
    'Balancing performance with clarity in the UI, especially around timers, live score updates, and feedback.',
    'Deepening my understanding of real time architectures, WebSockets, and reactive state management in a production like environment.'
  ];

  screenshots: ProjectScreenshot[] = [
    { src: 'assets/images/code_logiclash.png', alt: 'Code cracker game', caption: 'Code Cracker - real time duel view.' },
    { src: 'assets/images/solo_logiclash.png', alt: 'Letters game', caption: 'Letters Game - solo play.' },
    { src: 'assets/images/friends_logiclash.png', alt: 'Friends', caption: 'Friends interface with online status and invites.' },
    { src: 'assets/images/associations_logiclash.png', alt: 'Associations', caption: 'Associations Game - multi round match.' }
  ];

  roadmap: ProjectRoadmapItem[] = [
    { text: 'A full UI/UX redesign in collaboration with a designer.', completed: false },
    { text: 'Native Android and iOS versions built on top of the existing Angular/Node foundation.', completed: false },
    { text: 'A simple marketing and onboarding funnel to make it easier for new players to join matches.', completed: false }
  ];

  finalCta = {
    text: 'Interested in real time apps, game like products, or Angular/Node projects? Feel free to reach out - I\'d love to chat.',
    buttons: [
      { label: 'Play LogiClash', url: 'https://www.logiclash.com', external: true },
      { label: 'View Source', url: 'https://github.com/Belcuga/quizapp', external: true },
      { label: 'Contact Me', route: '/contact' }
    ]
  };
}




