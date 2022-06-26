import { useRef } from "react";
import "./App.css";
import Input from "./components/Input";

function App() {

  const InputRef = useRef();


  const text = {
    id: "textField",
    label: "Name",
    name: "textField",
    type: "text",
    value: "",
    placeholder: "Enter Joe Name"
  };
  const password = {
    id: "password",
    label: "Password",
    name: "password",
    type: "password",
    value: "",
    placeholder: "Enter Joe Password"
  };
  const radio = {
    id: "radio",
    label: "Radio Option",
    name: "radio",
    type: "radio",
    value: ""
  };
  const checkbox = {
    id: "radio",
    label: "Radio Option",
    name: "radio",
    type: "checkbox",
    value: ""
  };

  return (
    <div style={{fontFamily: 'Montserrat', display: "flex", flexDirection: 'column'}}>
      <Input input={text} ref={InputRef} />
      <Input input={password} ref={InputRef} />
      <Input input={radio} ref={InputRef} />
      <Input input={radio} ref={InputRef} />
      <Input input={checkbox} ref={InputRef} />
    </div>
  );
}

export default App;
