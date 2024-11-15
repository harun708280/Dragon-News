import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./Route/Route.jsx";
import AuthContext from "./Firebase/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
      <AuthContext>
         <RouterProvider router={router}></RouterProvider>
      </AuthContext>
   
  </StrictMode>
);
