import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Root from "./shared/Root";
import Hero from "./Components/Hero/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Hero />,
      },
    ],
  },
]);
export default router;
