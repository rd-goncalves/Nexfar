import Routes from "./Routes";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import { CartProvider } from "./contexts/CartContext";
import { AppLayout } from "./styles/styles";

function App() {
  return (
    <CartProvider>
      <AppLayout>
        <Header />
        <LeftSidebar />
        <Routes />
      </AppLayout>
    </CartProvider>
  );
}

export default App;
