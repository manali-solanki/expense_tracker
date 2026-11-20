import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import AddExpensepage from "./pages/AddExpensepage";

function App() {
  const rount = createBrowserRouter([
    { path: "/", element: <Homepage /> },
    { path: "/add-expense", element: <AddExpensepage /> },
  ]);
  return (
    <>
      <RouterProvider router={rount} />
    </>
  );
}
export default App;
