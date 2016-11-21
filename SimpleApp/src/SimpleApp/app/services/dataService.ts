import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Game} from '../models/game';

@Injectable()
export class DataService {
    private _games: Game[] =
        [ new Game("1", "Monopoly", "A real classic"),
            new Game("2", "Jumanji", "Also a cool game") ];

    constructor() {
    }

    public getGames(): Observable<Game[]> {
        return Observable.of(this._games);
    }

    public getGameCount(): number {
        return this._games.length;
    }

    public getPlayerCount(): number {
        return 0;
    }

    public addGame(game: Game) {
        game["id"] = (this._games.length + 1).toString();
        return Observable.of(this._games.push(game));
    }
}
