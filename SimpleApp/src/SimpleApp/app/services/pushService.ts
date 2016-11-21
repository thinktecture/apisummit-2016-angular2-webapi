import {Injectable, EventEmitter} from '@angular/core';

import {ApiConfig} from '../apiConfig';
import {Game} from '../models/game';

declare var $;

@Injectable()
export class PushService {
    private _hubConnection;
    private _connection;
    private _gamesHubProxy;

    public newGameAvailable: EventEmitter<Game> = new EventEmitter<Game>();

    constructor(private _configuration: ApiConfig) {
        this._hubConnection = $.hubConnection;
    }

    public newGame(game: string): void {
        if (!this._connection) {
            return;
        }

        this._gamesHubProxy.invoke('newGame', game);
    }

    public start(): void {
        if (this._connection) {
            return;
        }

        this._connection = this._hubConnection(`${this._configuration.rootUrl}signalr`);
        this._gamesHubProxy = this._connection.createHubProxy('gamesHub');

        this._gamesHubProxy.on('newGameAvailable', (game) => {
            this.newGameAvailable.emit(game);
        });

        this._connection.start()
            .done(() => console.log('SignalR connection established.'))
            .fail(() => console.error('SignalR connection not established.'));
    }

    public stop(): void {
        if (this._connection) {
            this._connection.stop();
        }

        this._connection = undefined;
        this._gamesHubProxy = undefined;
    }
}
