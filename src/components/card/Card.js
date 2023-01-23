import { CardContent } from "../card/styles";

function Card({ nome, img }) {
  return (
    <CardContent>
      <div>
        <h3>{nome}</h3>
      </div>
      <div>
        <img src={img} alt="prod" />
      </div>
    </CardContent>
  );
}

export default Card;
