import { CartProvider } from "./components/ContextReducer";
import Home from "./screens/Home";
function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
