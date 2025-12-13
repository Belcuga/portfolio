import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { LogiclashProjectComponent } from './pages/projects/logiclash-project/logiclash-project.component';
import { TipsyTrialsProjectComponent } from './pages/projects/tipsy-trials-project/tipsy-trials-project.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Milan - Frontend Developer'
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Milan - Projects'
    },
    {
        path: 'projects/logiclash',
        component: LogiclashProjectComponent,
        title: 'Milan - LogiClash'
    },
    {
        path: 'projects/tipsy-trials',
        component: TipsyTrialsProjectComponent,
        title: 'Milan - Tipsy Trials'
    },
    {
        path: 'experience',
        component: ExperienceComponent,
        title: 'Milan - Experience'
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: 'Milan - Contact'
    },
];
