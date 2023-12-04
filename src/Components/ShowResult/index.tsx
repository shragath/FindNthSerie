const ShowRes = ({
    valueSerie = 0,
    valueFibonacci = 0,
    valueTriangular = 0,
    valuePrimo = 0,
    nValue = 0,
}: {
    valueSerie: number;
    valueFibonacci: number;
    valueTriangular: number;
    valuePrimo: number;
    nValue: number;
}) => {
    return (
        <>
            <div>
                <label>
                    Equation: serie({nValue <= 0 ? 'n' : nValue}) = 2 fibonacci(
                    {nValue <= 0 ? 'n' : nValue} - 2) + 3 triangular(
                    {nValue <= 0 ? 'n' : nValue} - 2) - 7 primo(
                    {nValue <= 0 ? 'n' : nValue} - 1)
                </label>
            </div>
            <div>
                <p>
                    Fibonacci({nValue - 2}) = {valueFibonacci}, Triangular(
                    {nValue - 2}) = {valueTriangular}, Primo({nValue - 1}) ={' '}
                    {valuePrimo}
                </p>
            </div>
            <div>
                <label>
                    Resultado = {2 * valueFibonacci} + {3 * valueTriangular} -{' '}
                    {7 * valuePrimo} = <b>{valueSerie}</b>
                </label>
            </div>
        </>
    );
};

export default ShowRes;
