import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage";
import AddExpensepage from "./pages/AddExpensepage";
import ExpenseDetails from "./components/ExpenseDetails";

function App() {
  const rount = createBrowserRouter([
    { path: '/', element: <Homepage /> },
    { path: '/add-expense', element: <AddExpensepage /> },
    { path: 'expenseDetails/:id',element:<ExpenseDetails />}
  ]);
  return (
    <>
      <RouterProvider router={rount} />
    </>
  );
}
export default App;
