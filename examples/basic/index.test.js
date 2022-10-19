import sum from './index';

test('Should sum correctly', () => {
    const result = sum(2,2);

    expect(result).toBe(4);
})