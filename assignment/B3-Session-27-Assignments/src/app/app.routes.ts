import { Routes } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { TechnologiesComponent } from './technologies/technologies.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', component: GreetingComponent },
  {
    path: 'profile',
    component: ProfileFormComponent,
  },
  { path: 'technologies', component: TechnologiesComponent },
];
