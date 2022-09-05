import  { render, screen }  from '@testing-library/react';
import{ FirstApp} from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => {
    const title = 'hola soy paola andrea';

    test('debe de hacer match con el snapshot', () => {
        const { container} = render(<FirstApp title= { title }/>)
        expect ( container ).toMatchSnapshot();
    });

    test('Debe mostrar el mensaje Hola Soy Paola Andrea', () => {
        render(<FirstApp title= { title }/>)
        expect (screen.getByText(title)).toBeTruthy();
    });
});