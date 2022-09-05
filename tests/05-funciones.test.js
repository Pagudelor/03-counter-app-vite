import { getUser, getUsuarioActivo } from "../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones',()=>{
    test('get user should return an object', () => {
        const testuser={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();
        expect(user).toEqual(testuser);
    });

    test('get usuario debe retornar un object', () => {
        const name= 'paola';
        const usuario = getUsuarioActivo(name);
        console.log(usuario);
        expect(usuario).toStrictEqual({
            uid: 'ABC567',
            username: name
        });
    });
});