import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Detail from "./components/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error/>
  },
  {
    path: "/details",
    element: <Detail />,
  },
]);

const root = createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={router} />);
