import ShowRes from '../ShowResult';
import Equations from './types';

function CalculateNSerie({ n = 0 }: { n: number }) {
    const serie = new Equations(n).findNthFibonacci(n);
    return <ShowRes value={serie} />;
}

export default CalculateNSerie;
