import Home from "./pages/Dashboard/Dashboard";
import Layout from "./components/Layout/Layout";
import Notfound from "./components/Notfound/Notfound";
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import Team from "./pages/Team/Team";
import Contacts from "./pages/Contacts/Contacts";
import Invoices from "./pages/Invoices/Invoices";
import Form from "./pages/Form/Form";
import Calender from "./pages/Calender/Calender";
import FAQ from "./pages/FAQ/FAQ";
import GeographyChart from "./pages/GeographyChart/GeographyChart";
import LineChart from "./pages/LineChart/LineChart";
import PieChart from "./pages/PieChart/PieChart";
import BarChart from "./pages/BarChart/BarChart";

function App() {

  let routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "dashboard", element: <Home /> },
        { path: "team", element: <Team /> },
        { path: "contacts", element: <Contacts /> },
        { path: "invoices", element: <Invoices /> },
        { path: "form", element: <Form /> },
        { path: "calender", element: <Calender /> },
        { path: "faq", element: <FAQ /> },
        { path: "bar", element: <BarChart /> },
        { path: "pie", element: <PieChart /> },
        { path: "line", element: <LineChart /> },
        { path: "geography", element: <GeographyChart /> },
        { path: "*", element: <Notfound /> },
      ],
    },
  ]);



  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
