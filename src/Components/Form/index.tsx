import { useState } from 'react';
import CalculateNSerie from '../CalculateNSerie';
import Equations from '../CalculateNSerie/types';

interface FormElements extends HTMLFormControlsCollection {
    nInput: HTMLInputElement;
}

interface EqFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

const ShowEqForm = () => {
    const [n, setN] = useState(0);
    const [nFibonacci, setNFibonacci] = useState(0);

    const handleSubmit = (e: React.FormEvent<EqFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        try {
            const nInput = Number.parseInt(form.elements.nInput.value);

            setN(nInput);
            const test: Equations = new Equations(nInput);
            setNFibonacci(test.findNthFibonacci(nInput));
        } catch (error) {
            throw new Error('El valor no es un numero');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nInput">
                    Escribe el numero (n) de la serie ({n}) a calcular:
                </label>

                <input
                    id="nInput"
                    type="number"
                    title="n series value"
                    required
                />
                <button type="submit">Calcular</button>
            </form>

            <CalculateNSerie value={n} />
        </>
    );
};

export default ShowEqForm;
