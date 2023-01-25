import { ButtonStyle } from "./sButtonStyle";
function SubmitButton({ text }) {
  return (
    <div>
      <ButtonStyle>
        <button>{text}</button>
      </ButtonStyle>
    </div>
  );
}

export default SubmitButton;
