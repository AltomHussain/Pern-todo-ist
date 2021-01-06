import { Fragment } from "react";
import "./App.css";
import DisplayTodo from "./component/DisplayTodo";
import InputTodo from "./component/InputTodo";

function App() {
  return (
    <Fragment>
      <div>
        <InputTodo />
        <DisplayTodo/>
      </div>
    </Fragment>
  );
}

export default App;
