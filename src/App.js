import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./COMPONENTS/HOME/Home";
import Inventory from "./COMPONENTS/INVERNTORY/Inventory";
import Orders from "./COMPONENTS/ORDERS/Orders";
import Shipping from "./COMPONENTS/SHIPPING/Shipping";
import Shop from "./COMPONENTS/SHOP/Shop";
import SignUp from "./COMPONENTS/SIGN_UP/SignUp";
import DataLoader from "./DATA_LOADER/DataLoader";
import Login from "./LOGIN/Login";
import Main from "./Main/Main";
import PrivateRoutes from "./ROUTES/PrivateRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/shop",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: DataLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoutes>
              <Inventory></Inventory>
            </PrivateRoutes>
          ),
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoutes>
              <Shipping></Shipping>
            </PrivateRoutes>
          ),
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
