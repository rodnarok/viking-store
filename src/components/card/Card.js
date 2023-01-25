import { CardContent } from "../card/styles";

function Card({ nome, img }) {
  return (
    <CardContent>
      <div>
        <img src={img} alt="prod" />
      </div>
      <div>
        <h3>{nome}</h3>
      </div>
    </CardContent>
  );
}

export default Card;
