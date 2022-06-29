import { useRef } from "react";
import classes from "./App.module.css";
import Input from "./components/Input";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/UI/Sidebar";
import MobileNav from "./components/UI/MobileNav";

function Home(props) {
  const InputRef = useRef();

  const sideBarProps = [
    {
      text: "General Overview",
      id: "#genOver",
    },
    {
      text: "Text Field",
      id: "#text-field",
    },
    {
      text: "Password Field",
      id: "#pwField",
    },
    {
      text: "Email Field",
      id: "#email-field",
    },
    {
      text: "Search Field",
      id: "#search-field",
    },
    {
      text: "Tel Field",
      id: "#tel-field",
    },
  ];

  const text = {
    id: "textfield",
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
  const email = {
    id: "email",
    label: "Email ID",
    name: "email",
    type: "email",
    value: "",
    placeholder: "you@example.com",
  };
  const search = {
    id: "search",
    label: "Search",
    name: "search",
    type: "search",
    value: "",
    placeholder: "Search",
  };
  const tel = {
    id: "tel",
    label: "Phone Number",
    name: "tel",
    type: "tel",
    value: "",
    placeholder: "Your Number",
    pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}"
  };

  return (
    <>
      <MobileNav list={sideBarProps} />
      <Sidebar list={sideBarProps} />
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <h1>React Input Components</h1>
          <div>
            <h2 id="genOver">General Overview</h2>
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
            <h3>Note:</h3>
            <p>
              Since the <code>ref</code> will be same for mostly every
              component, I will not write the code for it in every part. If
              there are some changes in it, I will make sure to write it.
            </p>
          </div>
          <div>
            <h2 id="text-field">Text Field</h2>
            <h3>
              <code>
                <b>props</b>
              </code>
            </h3>
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
            <h3>Code</h3>
            <code className={classes.code}>
              &lt;Input input=&#123;text&#125; input=&#123;yourRef&#125; /&gt;
            </code>
            <h3>Result</h3>
            <Input input={text} ref={InputRef} />
          </div>
          <div>
            <h2 id="pwField">Password Field</h2>
            <h3>
              <code>
                <b>props</b>
              </code>
            </h3>
            <code className={classes.code}>
              const password = &#123; <br />
              id: "password", <br />
              label: "Password",
              <br />
              name: "password",
              <br />
              type: "password", <br />
              value: "", <br />
              placeholder: "Enter Joe Password",
              <br /> &#125;;
            </code>
            <h3>Code</h3>
            <code className={classes.code}>
              &lt;Input input=&#123;password&#125; input=&#123;yourRef&#125;
              /&gt;
            </code>
            <h3>Result</h3>
            <Input input={password} ref={InputRef} />
          </div>
          <div>
            <h2 id="email-field">Email Field</h2>
            <h3>
              <code>
                <b>props</b>
              </code>
            </h3>
            <code className={classes.code}>
              const email = &#123; <br />
              id: "email", <br />
              label: "Email ID",
              <br />
              name: "email",
              <br />
              type: "email", <br />
              value: "", <br />
              placeholder: "you@example.com",
              <br /> &#125;;
            </code>
            <h3>Code</h3>
            <code className={classes.code}>
              &lt;Input input=&#123;email&#125; input=&#123;yourRef&#125; /&gt;
            </code>
            <h3>Result</h3>
            <Input input={email} ref={InputRef} />
          </div>
          <div>
            <h2 id="search-field">Search Field</h2>
            <h3>
              <code>
                <b>props</b>
              </code>
            </h3>
            <code className={classes.code}>
              const search = &#123; <br />
              id: "search", <br />
              label: "Search",
              <br />
              name: "search",
              <br />
              type: "search", <br />
              value: "", <br />
              placeholder: "Search",
              <br /> &#125;;
            </code>
            <h3>Code</h3>
            <code className={classes.code}>
              &lt;Input input=&#123;search&#125; input=&#123;yourRef&#125; /&gt;
            </code>
            <h3>Result</h3>
            <Input input={search} ref={InputRef} />
          </div>
          <div>
            <h2 id="tel-field">Tel Field</h2>
            <h3>
              <code>
                <b>props</b>
              </code>
            </h3>
            <code className={classes.code}>
              const tel = &#123; <br />
              id: "tel", <br />
              label: "Phone Number",
              <br />
              name: "tel",
              <br />
              type: "tel", <br />
              value: "", <br />
              placeholder: "Your Number",
              <br />
              pattern:"[0-9]&#123;3&#125;-[0-9]&#123;2&#125;-[0-9]&#123;3&#125;"
              <br /> &#125;;
            </code>
            <h3>Code</h3>
            <code className={classes.code}>
              &lt;Input input=&#123;email&#125; input=&#123;yourRef&#125; /&gt;
            </code>
            <h3>Result</h3>
            <Input input={tel} ref={InputRef} />
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
