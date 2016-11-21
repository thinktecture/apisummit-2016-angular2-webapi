import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Game} from '../models/game';
import {Http} from "@angular/http";
import {ApiConfig} from "../apiConfig";

@Injectable()
export class DataService {
    private _games: Game[] =
        [ new Game("1", "Monopoly", "A real classic"),
            new Game("2", "Jumanji", "Also a cool game") ];

    constructor(private _http: Http, private _apiConfig: ApiConfig) {
    }

    public getGames(): Observable<Game[]> {
        //return Observable.of(this._games);
        return this._http.get(`${this._apiConfig.rootUrl}api/games/list`).map(games => games.json());
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
