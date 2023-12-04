import ShowRes from '../ShowResult';
import Equations from './types';

function CalculateNSerie({ n = 0 }: { n: number }) {
    const equation = new Equations(n);

    return <ShowRes valueSerie={equation.findNthSerie()} valueFibonacci={equation.resFibonacci} valueTriangular={equation.resTriangular} valuePrimo={equation.resPrimo} nValue={n} />;
}

export default CalculateNSerie;
