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
import Courses from "./components/pages/Courses/Courses.jsx";
import Quizzs from "./components/pages/Quizzs/Quizzs.jsx";
import Tasks from "./components/pages/Tasks/Tasks.jsx";
import ManageJobs from "./components/pages/ManageJobs/ManageJobs.jsx";
import ManageSchool from "./components/pages/ManageSchools/ManageSchool.jsx";
import ManageLawFirms from "./components/pages/ManageLawFirms/ManageLawFirms.jsx";
import ApplicationTracker from "./components/pages/ManageApplicationTracker/ApplicationTracker.jsx";
import Premium from "./components/pages/Premium/Premium.jsx";
import Settings from "./components/pages/Settings/Settings.jsx";


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
            },
            {
                path:'/courses',
                element: <Courses />,
            },
            {
                path:'/quiz',
                element: <Quizzs />
            },
            {
                path:'/task',
                element: <Tasks />,
            },
            {
                path:'/manage-jobs',
                element: <ManageJobs />,
            },
            {
                path: '/manage-schools',
                element: <ManageSchool />
            },
            {
                path:'/manage-law-firms',
                element: <ManageLawFirms />,
            },
            {
                path:'/application-tacker',
                element: <ApplicationTracker />
            },
            {
                path:'/premium',
                element: <Premium />,
            },
            {
                path:'/settings',
                element: <Settings />,
            }
        ]
    },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
