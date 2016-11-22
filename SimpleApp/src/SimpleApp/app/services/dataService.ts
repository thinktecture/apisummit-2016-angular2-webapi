import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Game} from '../models/game';
import {Http, Headers, RequestOptions} from "@angular/http";
import {ApiConfig} from "../apiConfig";

@Injectable()
export class DataService {
    constructor(private _http: Http, private _apiConfig: ApiConfig) {
    }

    public getGames(): Observable<Game[]> {
        return this._http.get(`${this._apiConfig.rootUrl}api/games/list`).map(games => games.json());
    }

    public getGameCount(): Observable<number> {
        return this._http.get(`${this._apiConfig.rootUrl}api/games/count`).map(count => count.json());
    }

    public getPlayerCount(): Observable<number> {
        return Observable.of(0);
    }

    public addGame(game: Game) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(`${this._apiConfig.rootUrl}api/games/item`, game, options);
    }
}
