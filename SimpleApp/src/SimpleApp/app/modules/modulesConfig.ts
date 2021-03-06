import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, XHRBackend, ConnectionBackend} from '@angular/http';
import {HashLocationStrategy, LocationStrategy, CommonModule} from '@angular/common';

import {BoardzAppComponent} from '../app';
import {DashboardComponent} from '../components/dashboard/dashboard';
import {HeaderComponent} from '../components/header/header';
import {SidebarComponent} from '../components/sidebar/sidebar';
import {WidgetComponent} from '../components/widget/widget';
import {APP_ROUTING, appRoutingProviders, GAMES_ROUTING} from '../routing/routingConfig';
import {DataService} from '../services/dataService';
import {GameListComponent} from '../components/games/list';
import {GamesRootComponent} from '../components/games/gamesRoot';
import {GameDetailsComponent} from '../components/games/details';
import {ApiConfig} from "../apiConfig";
import {PushService} from "../services/pushService";

export namespace ModuleConfiguration {

    export class App {
        public static declarations = [
            BoardzAppComponent,
            DashboardComponent,
            HeaderComponent,
            SidebarComponent,
            WidgetComponent
        ];

        public static imports = [
            BrowserModule,
            HttpModule,
            FormsModule,
            APP_ROUTING
        ];

        public static exports = [];

        public static providers = [{ provide: LocationStrategy, useClass: HashLocationStrategy },
            { provide: ConnectionBackend, useClass: XHRBackend },
            DataService,
            appRoutingProviders];

        public static bootstraps = [BoardzAppComponent]
    }

    export class Games {
        public static declarations = [GamesRootComponent, GameListComponent, GameDetailsComponent];

        public static imports = [CommonModule, FormsModule, GAMES_ROUTING];

        public static exports = [];

        public static providers = [ApiConfig, PushService];
    }
}
