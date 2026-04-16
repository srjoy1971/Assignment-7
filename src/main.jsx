import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './layout/RootLayout';
import Apps from './pages/apps/Apps';
import InstalApps from './pages/instalApps/InstalApps';
import NotFooundPage from './pages/Notpa/NotFooundPage';
import Homepage from './pages/homepage/Homepage';
import AppDetails from './pages/appDetails/AppDetails';




const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          // path: "/",
          index: true,
          element: <Homepage></Homepage>,
        },
        {
          path: "/Apps",
          element: <Apps></Apps>,
        },
        {
          path: "/apps/:id",
          element: <AppDetails></AppDetails>,
        },
        {
          path: "/InstalApps",
          element: <InstalApps></InstalApps>,
        }
      ],
      errorElement: <NotFooundPage></NotFooundPage>
    },

  ]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)