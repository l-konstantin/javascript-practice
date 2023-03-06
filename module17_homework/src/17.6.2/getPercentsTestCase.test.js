import { getPercents } from './getPercents.js';

test('Проверяем успешный результат тест-кейса', () => {
    expect(getPercents(30, 200)).toBe(60);
});

// test('Проверяем неуспешный результат тест-кейса', () => {
//     expect(getPercents(30, 200)).toBe(50);
// });
