import { createBrowserRouter } from "react-router-dom";
import NestedCheckbox from "../pages/NestedCheckbox.tsx";
import App from "../App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"/nested-checkbox",
    element:<NestedCheckbox/>
  }
]);

export default router;