import { hello } from './index';

describe('Index Module Tests', () => {

    test('should return hi', () => {
        expect(hello()).toBe('hi');
    });

});
