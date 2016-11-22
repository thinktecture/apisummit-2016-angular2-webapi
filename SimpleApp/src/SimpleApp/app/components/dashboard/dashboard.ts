import {Component, OnInit} from '@angular/core';

import {DataService} from '../../services/dataService';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.html'
})
export class DashboardComponent implements OnInit {
    public playerCount: string = '-';
    public gameCount: string = '-';

    constructor(private _dataService: DataService) {
    }

    public ngOnInit(): any {
        this._dataService.getPlayerCount().subscribe(count => {
            this.playerCount = count.toString()
        });

        this._dataService.getGameCount().subscribe(count => {
            this.gameCount = count.toString()
        });
    }
}
