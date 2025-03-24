import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SnackbarProvider } from "notistack";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={1}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      style={{ fontFamily: "sans-serif" }}
      autoHideDuration={1500}
    >
      <RouterProvider router={router} />
    </SnackbarProvider>
  </StrictMode>
);
