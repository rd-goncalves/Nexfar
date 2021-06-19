import Routes from "./Routes";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/ProductContext";
import { AppLayout } from "./styles/styles";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <AppLayout>
          <Header />
          <LeftSidebar />
          <Routes />
        </AppLayout>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
