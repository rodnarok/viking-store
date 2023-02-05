import { Form, CriarLayout } from "./styles";
import Input from "../../components/form/Input";
import Button from "../../components/form/SubmitButton";
function CriarAcc() {
  return (
    <CriarLayout>
      <div>
        <Form>
          <h1>Crie a sua conta</h1>
          <div>
            <Input
              type="text"
              text="Nome"
              name="name"
              placeholder="Insira o seu nome"
            />
            <Input
              type="text"
              text="Login"
              name="name"
              placeholder="Insira o nome do seu Login"
            />
            <Input
              type="text"
              text="Senha"
              name="name"
              placeholder="Insira uma senha"
            />
            <Input
              type="password"
              text="Comfirmar senha"
              name="name"
              placeholder="Insira novamente a senha"
            />
            <Button text={"Enviar"} />
          </div>
        </Form>
      </div>
    </CriarLayout>
  );
}

export default CriarAcc;
