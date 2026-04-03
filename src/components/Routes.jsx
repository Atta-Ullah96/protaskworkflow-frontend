// routes.js
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ManagerDashboard from "../Manager";
import Login from "../pages/Login";

import DeveloperDashboard from "../Developer";
import AddDeveloper from "../Manager/components/AddDeveloper";
import CreateTeam from "../Manager/components/CreateTeam";
import Task from "../Manager/components/Task";

import FilterTask from "../Manager/components/FilterTask";
import UpdatePassword from "../Developer/Components/UpdatePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/manager",
        element: <ManagerDashboard />,
        children: [
          {
            index: true,
            element: <Navigate to="filter/task" replace />,
          },
          {
            index: true,
            path: "filter/task",
            element: <FilterTask />,
          },
          {
            path: "add/developer",
            element: <AddDeveloper />,
          },
          {
            path: "create/team",
            element: <CreateTeam />,
          },
          {
            path: "add/task",
            element: <Task />,
          },
        ],
      },
      {
        path: "/Login",
        element: <Login />,
      },

      {
        path: "/developer",
        element: <DeveloperDashboard />,
      
      },
        
      {
        path: "/update/password",
        element: <UpdatePassword />,
      },
      
    ],
  },
]);

export default router;
