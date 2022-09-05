import { getHeroeById } from '../src/base-pruebas/08-imp-exp';

describe('test 08', ()=> {
    test('debe retornar un heroe dado su ID', () =>{
        const hero = getHeroeById(1);
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner:'DC' })
    });
    test('debe retornar undefined si no existe heroe', () =>{
        const hero = getHeroeById(1000);
        expect( hero ).toEqual(undefined)
    });
});