import { useRoutes } from "react-router-dom";
import FirstPage from "../FirstPage";
import SecondPage from "../SecondPage";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <FirstPage />,
      children: [{ index: true }],
    },
    {
      path: "/second-page",
      element: <SecondPage />,
    },
  ]);
  return element;
}
export default AppNavigation;
