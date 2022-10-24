import { BrowserRouter } from "react-router-dom";
import TransitionRoutes from "./utils/TransitionRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TransitionRoutes />
    </BrowserRouter>
  );
}

export default App;
