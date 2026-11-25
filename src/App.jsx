import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import AddExpensepage from "./pages/AddExpensepage";
import ExpenseDetails from "./components/ExpenseDetails";
import Layout from "./Layout/Layout";
import Loginpage from "./pages/Loginpage";

function App() {
  const rount = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/add-expense", element: <AddExpensepage /> },
        { path: "expenseDetails/:id", element: <ExpenseDetails /> },
      ],
    },
    {path:"/login",element: <Loginpage/>},
  ]);

  return (
    <>
      <RouterProvider router={rount} />
    </>
  );
}
export default App;
