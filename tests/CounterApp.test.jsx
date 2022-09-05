import  { render, screen, fireEvent }  from '@testing-library/react';
import{ CounterApp} from '../src/CounterApp'

describe('Pruebas en <FirstApp />', () => {
    const value = 10;
    test('debe de hacer match con el snapshot', () => {
        const { container} = render(<CounterApp value= { value}/>)
        expect ( container ).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value= { value }/>)
        expect (screen.getByText(value)).toBeTruthy();
    });

    test('Debe incrementar con el boton + 1', () => {
        render(<CounterApp value= { value }/>)
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('11')).toBeTruthy();
    });
    test('Debe incrementar con el boton -1', () => {
        render(<CounterApp value= { value }/>)
        fireEvent.click(screen.getByText('-1'));
        screen.debug();
        expect(screen.getByText('9')).toBeTruthy();
    });
    test('Debe incrementar con el boton reset', () => {
        render(<CounterApp value= { value }/>)
        fireEvent.click(screen.getByTestId('test-button-reset'));
        screen.debug();
        expect(screen.getByText(value)).toBeTruthy();
    });
});