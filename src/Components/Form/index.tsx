import { useState } from 'react';
import CalculateNSerie from '../CalculateNSerie';
import EqFormElement from './types';


const ShowEqForm = () => {
    const [n, setN] = useState(0);

    const handleSubmit = (e: React.FormEvent<EqFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        try {
            const nInput = Number.parseInt(form.elements.nInput.value);
            setN(nInput);
        } catch (error) {
            throw new Error('El valor no es un numero');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nInput">
                    Escribe el numero (n) de la serie:
                </label>

                <input
                    id="nInput"
                    type="number"
                    title="n series value"
                    placeholder="Number"
                    required
                />
                <button type="submit" id="buttonCalcular">Calcular</button>
            </form>

            <CalculateNSerie n={n} />
        </>
    );
};

export default ShowEqForm;
