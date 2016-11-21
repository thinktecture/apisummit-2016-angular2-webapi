import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Game} from '../../models/game';
import {DataService} from '../../services/dataService';
import {PushService} from "../../services/pushService";

@Component({
    moduleId: module.id,
    selector: 'game-list',
    templateUrl: 'list.html'
})
export class GameListComponent implements OnInit {
    public games: Game[];

    constructor(private _gamesService: DataService,
                private _pushService: PushService,
                private _router: Router,
                private _route: ActivatedRoute) {
    }

    public openCreateGame(): void {
        this._router.navigate(['../new'], { relativeTo: this._route });
    }

    public ngOnInit(): void {
        this.loadGames();

        this._pushService.newGameAvailable.subscribe(game => {
            this.loadGames();
        });
    }

    private loadGames() {
        this._gamesService.getGames()
            .subscribe(
                (games) => this.games = games,
                (err) => console.log('Error while fetching game data')
            );
    }
}
