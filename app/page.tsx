import FavColor from "./components/favColor";
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import"./sinta-style.css";

export default function MyApp(){
  return(
    <section>
    <Hero />
    <RiwayatPendidikan /> 
    <FavColor/>
    </section>
  );
}