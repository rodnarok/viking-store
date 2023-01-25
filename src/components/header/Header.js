import { Link } from "react-router-dom";
import { Top } from "./styles";
import vikIcon from "../../img/logo-viking.jpg";

function Header() {
  return (
    <Top>
      <Link to="/">
        <img src={vikIcon} alt="viking" />
      </Link>
      <div>
        <ul>
          <li className="item">
            <Link to="/criaracc">Crie a sua conta</Link>
          </li>
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <p>Carrinho</p>
          </li>
        </ul>
      </div>
    </Top>
  );
}

export default Header;
