import { Form, CriarLayout } from "./styles";
import Input from "../../components/form/Input";
import Button from "../../components/form/SubmitButton";
function CriarAcc() {
  return (
    <CriarLayout>
      <div>
        <Form>
          <h1>Crie a sua conta</h1>
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
          <Button text={"Enviar"} />
        </Form>
      </div>
    </CriarLayout>
  );
}

export default CriarAcc;
