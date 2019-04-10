import { Kitten } from '../state/kitten/kitten.model';

export class InMemoryDataService {
    createDb() {
        const kittens: Array<Kitten> = [
            { id: 1, name: 'Buttons' },
            { id: 2, name: 'Sprinkles' }
        ];

        return { kittens };
    }
}