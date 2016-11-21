import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Game} from '../../models/game';
import {DataService} from '../../services/dataService';

@Component({
    moduleId: module.id,
    selector: 'gameDetail',
    templateUrl: 'details.html'
})
export class GameDetailsComponent {
    public active = true;
    public model: Game = new Game();

    constructor(private _dataService: DataService,
                private _router: Router) {
    }

    public abort(): void {
        this._router.navigate(['/games/all']);
    }

    public saveChanges(): void {
        this._dataService.addGame(this.model)
            .subscribe(
                () => {
                    console.log('New game was added.');
                    this._router.navigate(['/games/all']);
                },
                () => console.error('Could not save new game.')
            );
    }
}
