import { InputStyle } from "./inputStyle";
function Input({ text, placeholder, name, type, value }) {
  return (
    <div>
      <InputStyle>
        <label htmlFor={name}>{text}:</label>
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          id={name}
          value={value}
        ></input>
      </InputStyle>
    </div>
  );
}

export default Input;
