import { Form, CriarLayout } from "./styles";
import Input from "../../components/form/Input";
import Button from "../../components/form/SubmitButton";
function Login() {
  return (
    <CriarLayout>
      <div>
        <Form>
          <h1>Entrar com sua conta</h1>

          <Input
            type="text"
            text="Login"
            name="name"
            placeholder="Insira o seu Login"
          />
          <Input
            type="password"
            text="Senha"
            name="name"
            placeholder="Insira a senha"
          />
          <Button text={"Enviar"} />
        </Form>
      </div>
    </CriarLayout>
  );
}

export default Login;
