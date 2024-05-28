import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './routes/layout';
import NotMatch from './routes/not-match';
import RentPage from './routes/rent';
import AboutPage from './routes/about';
import SellPage from './routes/sell';
import HomePage from './routes/home';
import NewsPage from './routes/news';
import Mortgage from './routes/mortgage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotMatch />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'rent',
        element: <RentPage />,
      },
      {
        path: 'about/*',
        element: <AboutPage />,
        children: [
          {
            index: true,
            element: <div>Main About Page</div>
          },
          {
            path:"OCCFAD",
            element: <div>OCCFAD</div>
          },
          {
            path:"address",
            element: <div>address</div>
          },
          {
            path:"meetthedoctors",
            element: <div>meetthedoctors</div>
          },
          {
            path:"officetour",
            element: <div>officetour</div>
          },
          {
            path:"patientexperiences",
            element: <div>Patient Experiences</div>
          },

        ]
      },
      {
        path: 'sell',
        element: <SellPage />,
      },
      {
        path: 'news',
        element: <NewsPage />,
      },
      {
        path: 'mortgage',
        element: <Mortgage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
