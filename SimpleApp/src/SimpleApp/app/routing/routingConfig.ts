import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from '../components/dashboard/dashboard';
import {GameListComponent} from '../components/games/list';
import {GamesRootComponent} from '../components/games/gamesRoot';
import {GameDetailsComponent} from '../components/games/details';

const appRootRoutes: Routes = [
    { path: '', component: DashboardComponent }
];

const gameRoutes: Routes = [
    {
        path: 'games',
        component: GamesRootComponent,
        children: [
            { path: 'all', component: GameListComponent, data: { displayName: 'Game overview' } },
            {
                path: 'new',
                component: GameDetailsComponent,
                data: { displayName: 'Create a new game' }
            }
        ]
    }
];

export const appRoutingProviders: any[] = [];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(appRootRoutes);
export const GAMES_ROUTING: ModuleWithProviders = RouterModule.forChild(gameRoutes);
