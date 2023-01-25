import { Container } from "./styles";

// import vikShip from "../../img/viking-ship.gif";
import bracelet from "../../img/pulseira-viking.webp";
import neck from "../../img/colar-viking.webp";
import ring from "../../img/anel-viking.jpg";
import contas from "../../img/contas-vikings.webp";

import Card from "../../components/card/Card";
import Carousel from "../../components/carousel/Carousel";
function Home() {
  return (
    <Container>
      {/* <Intro>
        <div>
          <h1>Bem-Vindo à Viking Store!</h1>
        </div>
        <img src={vikShip} alt="Ship" />
      </Intro> */}
      <Carousel />
      <div>
        <h2>Conheça nossos produtos baseados em artefatos vikings</h2>
      </div>
      <section>
        <Card nome={"Braceletes"} img={bracelet} />
        <Card nome={"Colares"} img={neck} />
        <Card nome={"Aneis"} img={ring} />
        <Card nome={"Runas"} img={contas} />
      </section>
      <h2>Ofertas</h2>
      <section>
        <Card nome={"Braceletes"} img={bracelet} />
        <Card nome={"Colares"} img={neck} />
      </section>
    </Container>
  );
}

export default Home;
