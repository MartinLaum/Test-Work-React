import "./App.css";
import Home from "./pages/Home/Home";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div className="App">
      <Home products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
