// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import SignUpPage from "./pages/SignupPage";
import SignInPage from "./pages/SignInPage";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import CartPage from "./pages/CartPage";
import LocationPage from "./pages/LocationPage";
import ServicesPage from "./pages/ServicesPage";
import Offers from "./pages/Offers";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/offers" element={<Offers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
