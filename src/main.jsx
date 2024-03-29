import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import DonationDetails from './Components/DonationDetails/DonationDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('../donationColorUpdateFinal.json'),
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/Donation',
        element: <Donation></Donation>,
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/donate-Id/:id',
        element: <DonationDetails></DonationDetails>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
