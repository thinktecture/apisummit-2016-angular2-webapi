export class Game {
    constructor();

    constructor(id: string, name: string, description: string);

    constructor(public id: string, public name: string, public description: string) {
    }
}
