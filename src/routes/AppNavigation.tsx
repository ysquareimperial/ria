import { useRoutes } from "react-router-dom";
import FirstComponent from "../FirstComponent";
import InitialComponent from "../InitialComponent";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <InitialComponent />,
      children: [{ index: true }],
    },
    // {
    //   element: <AppIndex />,
    //   children: [
    //     { index: true, element: <AppIndex /> },
    //     {
    //       path: "/home",
    //       element: <Home />,
    //     },
       
    //   ],
    // },
    {
      path: "/first-component",
      element: <FirstComponent />,
    },
  ]);
  return element;
}
export default AppNavigation;
