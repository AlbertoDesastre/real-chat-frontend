import { useState } from "react";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <WelcomePage setCount={setCount} count={count}></WelcomePage>;
}

export default App;
