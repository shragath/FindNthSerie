import ShowRes from "../ShowResult";
import Equations from "./types";

function calculate_serie({ n = 0 }: { n: number }) {
  const serie = new Equations(n).serie();
  // const [serie, setSerie] = useState(0);
  return <ShowRes value={serie} />;
}
