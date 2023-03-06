import { getPercents } from './getPercents.js';

test('граничные случаи', () => {
    if (number != 0 && number > 0 ) {
        expect(getPercents(30, 200)).toBe(60);
    }    
});