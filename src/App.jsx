import { Fragment } from "react";
import Header from "./components/Headerv2.jsx";
import Quiz from "./components/Quiz.jsx";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
        <Quiz></Quiz>
      </main>
    </Fragment>
  );
}

export default App;
