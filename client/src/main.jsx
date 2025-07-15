import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster} from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context/AppContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ContextProvider>
    <App />
    <Toaster />
  </ContextProvider>
  </BrowserRouter>
);
