import {getHeroeByIdAsync} from "../src/base-pruebas/09-promesas";

describe('09', () => {
    test('should return a getHeroeByIdAsync', (done) => {
        getHeroeByIdAsync(2)
        .then( hero => {
            expect( hero ).toEqual({
                id:2,
                name: 'Spiderman',
                owner:'Marvel'
            });
            done();
        });
    });

    test('should return an error with a non existing hero', (done) => {
        getHeroeByIdAsync(2000)
        .catch( error => {
            expect( error ).toBe("No se pudo encontrar el héroe");
            done();
        });
    });
});