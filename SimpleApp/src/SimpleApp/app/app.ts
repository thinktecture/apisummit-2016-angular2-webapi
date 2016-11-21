import {Component, AfterViewInit} from '@angular/core';
import {IBoardZAppWindow} from './interfaces/boardzAppWindow';
import {PushService} from "./services/pushService";

declare var window: IBoardZAppWindow;

@Component({
    moduleId: module.id,
    selector: 'boardz-app',
    templateUrl: 'app.html'
})

export class BoardzAppComponent implements AfterViewInit {
    constructor(private _pushService: PushService) {
    }

    public ngAfterViewInit(): any {
        if (window.initAdminLTE) {
            window.initAdminLTE();
        }

        this._pushService.start();
    }
}
