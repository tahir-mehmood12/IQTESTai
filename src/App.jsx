import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import Home from "./pages/home";
import Test from "./pages/test";
import Certificate from "./pages/certificate";
import Pricing from "./pages/pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
