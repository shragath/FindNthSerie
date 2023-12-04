
interface FormElements extends HTMLFormControlsCollection {
    nInput: HTMLInputElement;
}

interface EqFormElement extends HTMLFormElement {
    readonly elements: FormElements;
}

export default EqFormElement;
