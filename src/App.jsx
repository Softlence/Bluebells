import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./about";
import { Capabilities } from "./capabilities";
import { Certification } from "./certification";
import { Contact } from "./contact";
import Services from "./services";
import { Home } from "./home";
import { Strength } from "./strength";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/capabilities",
      element: <Capabilities />,
    },
    {
      path: "/certification",
      element: <Certification />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/strength",
      element: <Strength />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
