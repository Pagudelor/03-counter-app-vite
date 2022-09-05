import {getImagen} from '../src/base-pruebas/11-async-await';

describe('11', () => {
    test('should return an image', async() => {
        const url = await getImagen();
        console.log(url);
        expect( typeof url).toBe('string');
    });
});