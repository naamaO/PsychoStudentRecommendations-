import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { RegisterComponent } from './register/register.component';
import { CandidateComponent } from './candidate/candidate.component';
import { OfficeUseComponent } from './office-use/office-use.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },
    {
        path: 'candidate',
        component: CandidateComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Candidate] }
    },
    {
        path: 'office-use',
        component: OfficeUseComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Office] }
    },
    {
        path: 'recommendation',
        component: RecommendationComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Recommender] }
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);