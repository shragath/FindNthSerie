import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '../App';
import renderer from 'react-test-renderer';

// Test renders App components
describe('Renders components sin fallos', () => {
    it('Renders App', () => {
        render(<App />);
    });

    it('Prueba de comparacion snapshot', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
