import { retornaArreglo } from "../src/base-pruebas/07-deses-arr";

describe('test 07', ()=> {
test('debe retornar un string y un número', () =>{
    const [letters, numbers] = retornaArreglo();
    expect(letters).toBe('ABC');
    expect(typeof numbers).toBe('number');
});
});