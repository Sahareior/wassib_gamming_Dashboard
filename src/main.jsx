import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Dashboard from "./components/pages/Dashboard/Dashboard.jsx";
import Students from "./components/pages/Students/Students.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element:<App />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/students",
                element: <Students />,
            }
        ]
    },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
