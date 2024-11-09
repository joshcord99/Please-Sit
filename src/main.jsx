import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../pages/Home.jsx";
import Footer from "../pages/footer.jsx";
import Logo from "../pages/logo.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Logo />
    <App />
    <Footer />
  </StrictMode>
);
