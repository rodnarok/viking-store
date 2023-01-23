import { Top } from "./styles";
import vikIcon from "../../img/img-inicio.bmp";

function Header() {
  return (
    <Top>
      <img src={vikIcon} alt="viking" />
      <div>
        <p>Inicio</p>
        <p>Login</p>
        <p>Carrinho</p>
        <p>Produtos</p>
      </div>
    </Top>
  );
}

export default Header;
