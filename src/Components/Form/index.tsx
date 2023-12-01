import { useEffect, useState } from "react";
import ShowRes from "../ShowResult";
import Equations from "../CalculateNSerie/types";

interface FormElements extends HTMLFormControlsCollection {
  nInput: HTMLInputElement;
}

interface EqFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const ShowEqForm = () => {
  const [n, setN] = useState(0);
  const [nFibonacci, setNFibonacci] = useState(0);

  useEffect(() => {
    console.log("Render EqForm");
  }, []);

  const handleSubmit = (e: React.FormEvent<EqFormElement>) => {
    e.preventDefault();
    console.log("Submit EqForm");

    const form = e.currentTarget;

    try {
      const n_input = Number.parseInt(form.elements.nInput.value);

      setN(n_input);
      const test: Equations = new Equations(n);
      setNFibonacci(test.findNthFibonacci(n_input));
    } catch (error) {
      throw new Error("El valor no es un numero");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nInput">Escribe el numero (n) de la serie ({n}):</label>

        <input id="nInput" type="number" title="n series value" required />
        <button type="submit">Calcular</button>
      </form>

      <ShowRes value={nFibonacci} />
    </>
  );
};

export default ShowEqForm;
