import { useRef } from "react";
import classes from "./App.module.css";
import Input from "./components/Input";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home(props) {
  const InputRef = useRef();

  const text = {
    id: "textField",
    label: "Name",
    name: "textField",
    type: "text",
    value: "",
    placeholder: "Enter Joe Name",
  };
  const password = {
    id: "password",
    label: "Password",
    name: "password",
    type: "password",
    value: "",
    placeholder: "Enter Joe Password",
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h1>React Input Components</h1>
          <div>
            <h2>General Overview</h2>
            <p>
              This is an example to explain the flow of code of the input
              component. <br />
              The Input Component takes in two props; <code>
                input
              </code> and <code>ref</code>. <code>input</code> is an object of
              the following format:
            </p>
            <code className={classes.code}>
              const text = &#123; <br />
              id: "textField", <br />
              label: "Name",
              <br />
              name: "textField",
              <br />
              type: "text", <br />
              value: "", <br />
              placeholder: "Enter Joe Name",
              <br /> &#125;;
            </code>
            <p>
              Your <code>ref</code> should look something like this:
            </p>
            <code className={classes.code}>const yourRef = useRef();</code>
            <p>
              Then you can just make a ref which will get you the submitted
              value of the input field. <br />
              The code of the Input component should look like this:
            </p>
            <code className={classes.code}>
              &lt;Input input=&#123;text&#125; input=&#123;yourRef&#125; /&gt;
            </code>
            <h3>Result</h3>
            <Input input={text} ref={InputRef} />
          </div>
          <div>
            {/* <h2>Text Field</h2> */}
            
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router basename={window.location.pathname || ""}>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
