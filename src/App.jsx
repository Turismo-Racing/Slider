import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Slider />
      </BrowserRouter>
    </div>
  );
}

export default App;
