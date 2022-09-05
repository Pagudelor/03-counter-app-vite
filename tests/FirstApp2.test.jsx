import  { render }  from '@testing-library/react';
 import{ FirstApp} from '../src/FirstApp'

describe('Pruebas en <FirstApp />', () => {
    test('debe de hacer match con el snapshot', () => {
        const title = 'hola soy paola andrea'
        const { container, getByText, getByTestId } = render(<FirstApp title= { title }/>)
        //expect ( container ).toMatchSnapshot();
        expect (getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toBe(title);
    });

    test('debe mostrar el subtitulo pasado por props', () => {
        const title = 'hola soy paola andrea';
        const subTitle = 'hola soy un subtitulo de test';
        const { getByText } = render(<FirstApp title= { title } subTitle= { subTitle }/>)
        expect (getByText(subTitle)).toBeTruthy();
    });
});