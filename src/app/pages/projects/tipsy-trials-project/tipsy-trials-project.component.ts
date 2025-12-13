import { Component } from '@angular/core';
import { ProjectDetailLayoutComponent, ProjectHero, ProjectFeature, ProjectTechStack, ProjectScreenshot, ProjectRoadmapItem, PartyStat } from '../../../shared/components/project-detail-layout/project-detail-layout.component';

@Component({
  selector: 'app-tipsy-trials-project',
  standalone: true,
  imports: [ProjectDetailLayoutComponent],
  templateUrl: './tipsy-trials-project.component.html',
  styleUrl: './tipsy-trials-project.component.scss'
})
export class TipsyTrialsProjectComponent {
  hero: ProjectHero = {
    title: 'Tipsy Trials',
    tagline: 'Fun party game web app for drinking nights, house parties, and social gatherings.',
    metaBadges: ['Next.js + React', 'Supabase', 'React native', 'Question engine', 'Party game'],
    oneLiner: 'Browser based party game with dynamic questions, player setup, difficulty progression, and an optional 18+ mode, originally built for my friend group to make parties more fun and a little bit chaotic.',
    ctaButtons: {
      primary: {
        label: 'Play Live',
        url: 'https://tipsytrials.com',
        external: true
      },
      secondary: {
        label: 'View on GitHub',
        url: 'https://github.com/Belcuga/party-game',
        external: true
      },
    },
    heroImage: {
      src: '/assets/images/pocetna_tipsytrials.png',
      alt: 'Tipsy Trials hero screenshot',
      techLabels: ['Next.js 15', 'React 19', 'Supabase', 'React Native']
    }
  };

  overview = `
    <p>Tipsy Trials is a browser based party game designed for house parties and social gatherings. Players configure content (fun, spicy, challenge only), add themselves with custom attributes, and take turns answering dynamically filtered questions based on group preferences.</p>
    <p>The app includes both a player facing experience and an admin panel for managing the question database, difficulty levels, and content flags.</p>
    <h3 class="overview-subsection-heading">Game Flow</h3>
    <ol class="overview-list">
      <li><strong>Setup</strong> → Add players, attributes, and preferences.</li>
      <li><strong>Configure</strong> → Choose game mode and content filters (fun, spicy, challenge only).</li>
      <li><strong>Fetch</strong> → Questions are pulled from Supabase using difficulty + attribute filters.</li>
      <li><strong>Play</strong> → Players rotate, answer, vote, or skip.</li>
      <li><strong>Progress</strong> → Difficulty cycles and content adapts over time.</li>
      <li><strong>Continue</strong> → Play indefinitely or until the party ends.</li>
    </ol>
    <h3 class="overview-subsection-heading">Use Cases</h3>
    <p>House parties • College events • Adult game nights</p>
    <p class="overview-note">Responsive for groups of any size, from 2 people to big parties passing one phone around.</p>
  `;

  partyStats: PartyStat[] = [
    { text: '10+ parties spiced up' },
    { text: '100+ beers and drinks involved' },
    { text: '2 relationships started (that we know of 😅)' },
    { text: 'Countless "never doing that again" moments' }
  ];

  features: ProjectFeature[] = [
    { 
      title: 'Player Management', 
      description: 'Add/remove players with custom attributes (gender, drink type, relationship status), plus LocalStorage persistence for quick rejoin.' 
    },
    { 
      title: 'Game Configuration', 
      description: 'Toggle adult (18+) and physical challenge content. Modes like "dirty only" or "challenge only" automatically filter the question pool. Settings control which question types are allowed for each group.' 
    },
    { 
      title: 'Question System', 
      description: 'Intelligent question engine that uses difficulty queues, content flags, and player attributes for smart matching. Supports dynamic ${player} substitutions and "all players" questions.' 
    },
    { 
      title: 'Game Mechanics', 
      description: 'Round based gameplay with skip system and reward loops. Punishment multipliers (beer/wine/strong drinks) and voting to like/dislike questions, with Supabase updates.' 
    },
    { 
      title: 'UI & UX', 
      description: 'Neon purple/blue gradients and card based layout optimized for dim party lighting. Smooth transitions and a fixed action bar on mobile for one handed play.' 
    },
    { 
      title: 'Admin Features', 
      description: 'Full CRUD for questions at /admin/questions, with paginated Supabase fetching, feature flags, difficulty and punishment settings, plus tooltips and confirmation dialogs for safe editing.' 
    }
  ];

  additionalFeatures: string[] = [
    '<strong>Design Highlights:</strong> Neon party aesthetic with mobile first layouts, responsive gradients, and animated UI states that stay readable even in dim party lighting.',
    '<strong>Notable Technical Features:</strong> Intelligent question algorithm combining difficulty, content flags, and player attributes. Placeholder substitution ensures good match logic. Persistent play state across reloads, plus Vercel optimized build with sitemap/SEO and real time like/dislike voting to improve the question pool over time.'
  ];

  techStack: ProjectTechStack = {
    frontend: [
      'Next.js 15 App Router with React 19 and TypeScript.',
      'Tailwind CSS 4 for modern, responsive styling.',
      'Reusable UI components (buttons, modals, loaders) for consistent design.',
      'React Context + LocalStorage synchronization for state management across sessions.'
    ],
    backend: [
      'Supabase (PostgreSQL) for question database and real time updates.',
      'Real time likes/dislikes voting system to rank and improve questions.',
      'Optimized pagination queries (1000 item chunks) for the admin panel.',
      'Policy and configuration pages for deployment and content management.'
    ],
    highlight: 'Native iOS and Android versions built with React Native are also built, aimed at providing an even better "pass the phone" experience during parties.'
  };

  role = `
    <p>I designed and built Tipsy Trials end to end: frontend web app, admin panel, database design, question filtering algorithm, and mobile app architecture.</p>
  `;

  roleBullets: string[] = [
    'Designing the game flow, player management system, and question filtering algorithm.',
    'Implementing the Next.js/React frontend with responsive layouts and neon party aesthetic.',
    'Building the Supabase database schema, real time voting system, and admin CRUD interface.',
    'Creating the intelligent question matching system with difficulty progression and attribute based filtering.',
    'Architecting React Native mobile apps for iOS and Android based on the same backend.',
    'Managing deployments, SEO optimization, and performance tuning on Vercel.'
  ];

  challenges: string[] = [
    'Designing an intelligent question filtering algorithm that combines difficulty queues, content flags, and player attributes while maintaining good match quality.',
    'Implementing placeholder substitution logic so questions dynamically reference the right players and still make sense.',
    'Creating a smooth, mobile first UX optimized for phones being passed around in dim party environments.',
    'Building a scalable admin interface for large question databases with efficient pagination.',
    'Learning how to design products that are both technically solid and genuinely fun for non technical users (friends, guests, and party hosts).'
  ];

  screenshots: ProjectScreenshot[] = [
    { src: '/assets/images/question_tipsytrials.png', alt: 'Question', caption: 'Question view – single player\'s turn.' },
    { src: '/assets/images/question_all_tipsytrials.png', alt: `All players' question`, caption: 'All players question – everyone answers together.' },
    { src: '/assets/images/add_player_tipsytrials.png', alt: 'Add player interface', caption: 'Add a Player interface with attributes and flags.' },
    { src: '/assets/images/admin_tipsytrials.png', alt: 'Admin question table', caption: 'Admin question management interface with filters and pagination.' }
  ];

  roadmap: ProjectRoadmapItem[] = [
    { text: 'Publish Tipsy Trials as React Native apps on the iOS App Store and Google Play Store.', completed: false, highlighted: true },
    { text: 'Add more UI polish and microinteractions to enhance the party feel.', completed: false },
    { text: 'Experiment with a lightweight marketing push to test it as a standalone party app.', completed: false }
  ];

  finalCta = {
    text: 'Interested in party games, React/Next.js projects, or mobile app development? Feel free to reach out, I\'d love to chat.',
    buttons: [
      { label: 'Play Live', url: 'https://tipsytrials.com', external: true },
      { label: 'View Source Code', url: 'https://github.com/Belcuga/party-game', external: true },
      { label: 'Contact Me', route: '/contact' }
    ]
  };
}

