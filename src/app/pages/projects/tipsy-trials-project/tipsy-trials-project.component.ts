import { Component } from '@angular/core';
import { ProjectDetailLayoutComponent, ProjectHero, ProjectFeature, ProjectTechStack, ProjectScreenshot, ProjectRoadmapItem } from '../../../shared/components/project-detail-layout/project-detail-layout.component';

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
    tagline: 'Fun party game web app for drinking nights & social gatherings',
    metaBadges: ['Next.js + React', 'Supabase', 'Mobile Apps'],
    oneLiner: 'Web party game experience with dynamic questions, player setup, difficulty progression, and optional 18+ mode - designed for fun nights with friends.',
    ctaButtons: {
      primary: {
        label: 'Play Live',
        url: 'https://tipsytrials.com',
        external: true
      },
      secondary: {
        label: 'View on GitHub',
        url: 'https://github.com/yourusername/tipsy-trials', // TODO: Update with actual repo URL
        external: true
      },
      tertiary: {
        label: 'Back to all projects',
        route: '/projects'
      }
    },
    heroImage: {
      src: '/assets/images/pocetna_tipsytrials.png',
      alt: 'Tipsy Trials hero screenshot',
      techLabels: ['Next.js 15', 'React 19', 'Supabase', 'React Native']
    }
  };

  overview = `
    <p>Tipsy Trials is a browser-based party game designed for house parties and social gatherings. Players configure content (fun, spicy, challenge-only), add themselves with custom attributes, and rotate answering dynamically filtered questions based on group preferences.</p>
    <p>It includes both a player-facing experience and an admin panel for managing the question database.</p>
    <h3 class="overview-subsection-heading">Game Flow</h3>
    <ol class="overview-list">
      <li><strong>Setup</strong> → Add players + preferences</li>
      <li><strong>Configure</strong> → Choose game mode</li>
      <li><strong>Fetch</strong> → Database filtering</li>
      <li><strong>Play</strong> → Rotation, voting, skips</li>
      <li><strong>Progress</strong> → Difficulty cycles</li>
      <li><strong>Continue</strong> → Indefinitely</li>
    </ol>
    <h3 class="overview-subsection-heading">Use Cases</h3>
    <p>House parties • College events • Adult game nights</p>
    <p class="overview-note">Responsive for groups of any size.</p>
  `;

  features: ProjectFeature[] = [
    { 
      title: 'Player Management', 
      description: 'Add/remove players with custom attributes (gender, drink type, relationship status). LocalStorage persistence.' 
    },
    { 
      title: 'Game Configuration', 
      description: 'Toggle adult (18+) and physical challenge content. Dirty-only mode overrides others automatically. Settings control allowed question types.' 
    },
    { 
      title: 'Question System', 
      description: 'Smart filtering using difficulty queue per player (levels 1–5), content flags (dirty, challenge, all_player, difficulty), and player attributes for placeholder substitutions. Dynamic ${player} name insertion and group "all player" question support.' 
    },
    { 
      title: 'Game Mechanics', 
      description: 'Round-based gameplay with skip system and reward loops. Punishment multipliers (beer/wine/strong drinks). Question voting with Supabase updates.' 
    },
    { 
      title: 'UI & UX', 
      description: 'Neon purple/blue gradients + modern card designs. Smooth transitions. Fixed action bar on mobile.' 
    },
    { 
      title: 'Admin Features', 
      description: 'Full CRUD for questions at /admin/questions. Paginated Supabase fetching. Feature flags + difficulty + punishments. Tooltips for long text. Confirmation dialogs.' 
    }
  ];

  additionalFeatures: string[] = [
    '<strong>Design Highlights:</strong> Neon party aesthetic with mobile-first layouts. Responsive gradients + animated UI states. Clear readability for dim lighting environments.',
    '<strong>Notable Technical Features:</strong> Intelligent question algorithm combines difficulty, attributes and filters. Placeholder substitution ensures good match logic. Persistent play state across reloads. Vercel-optimized build + sitemap/SEO. Real-time content improvement: like/dislike voting.'
  ];

  techStack: ProjectTechStack = {
    frontend: [
      'Next.js 15 App Router with React 19 and TypeScript.',
      'Tailwind CSS 4 for modern, responsive styling.',
      'Reusable UI components (buttons, modals, loaders) for consistent design.',
      'React Context + LocalStorage synchronization for state management.'
    ],
    backend: [
      'Supabase (PostgreSQL) for question database and real-time updates.',
      'Real-time likes/dislikes voting system.',
      'Optimized pagination queries (1000-item chunks).',
      'Policy pages for deployment and content management.'
    ],
    highlight: 'Native iOS and Android versions built with React Native, providing an optimized experience for passing a phone around during party play.'
  };

  role = `
    <p>I designed and built Tipsy Trials end to end: frontend web app, admin panel, database design, question filtering algorithm, and mobile app architecture.</p>
  `;

  roleBullets: string[] = [
    'Designing the game flow, player management system, and question filtering algorithm.',
    'Implementing the Next.js/React frontend with responsive layouts and neon party aesthetic.',
    'Building the Supabase database schema, real-time voting system, and admin CRUD interface.',
    'Creating the intelligent question matching system with difficulty progression and attribute-based filtering.',
    'Architecting React Native mobile apps for iOS and Android platforms.',
    'Managing deployments, SEO optimization, and performance tuning.'
  ];

  challenges: string[] = [
    'Designing an intelligent question filtering algorithm that combines difficulty queues, content flags, and player attributes while maintaining good match quality.',
    'Implementing placeholder substitution logic to ensure questions match player attributes dynamically.',
    'Creating a smooth, mobile-first UX optimized for phones being passed around in dim party lighting.',
    'Building a scalable admin interface for managing large question databases with efficient pagination.',
    'Synchronizing game state across page reloads while maintaining LocalStorage consistency.',
    'Balancing performance with real-time voting updates from Supabase.'
  ];

  screenshots: ProjectScreenshot[] = [
    { src: '/assets/images/question_tipsytrials.png', alt: 'Question', caption: 'Question' },
    { src: '/assets/images/question_all_tipsytrials.png', alt: `All players' question`, caption: `All players' question` },
    { src: '/assets/images/add_player_tipsytrials.png', alt: 'Add player interface', caption: 'Add player interface' },
    { src: '/assets/images/admin_tipsytrials.png', alt: 'Admin question table', caption: 'Admin question management interface' }
  ];

  roadmap: ProjectRoadmapItem[] = [
    { text: 'Expanding the project to React Native mobile apps for iOS and Android.', completed: false },
    { text: 'New UI polish and enhanced visual design.', completed: false },
    { text: 'Potential marketing push as a standalone party product.', completed: false }
  ];

  finalCta = {
    text: 'Interested in party games, React/Next.js projects, or mobile app development? Feel free to reach out - I\'d love to chat.',
    buttons: [
      { label: 'Play Live', url: 'https://tipsytrials.com', external: true },
      { label: 'View Source Code', url: 'https://github.com/yourusername/tipsy-trials', external: true },
      { label: 'Contact Me', route: '/contact' }
    ]
  };
}

