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
import ServicesPage from './routes/services';
import SellPage from './routes/sell';
import HomePage from './routes/home';
import NewsPage from './routes/news';
import Mortgage from './routes/mortgage';
import ServiceComponent from './components/ServiceLayout';
import SmileDesignComponent from './components/SmileDesign';
import Veneers from './components/Veneers';
const services = [
  {
    title: 'Cosmetic and Restorative Dentistry',
    description: 'This is a brief description of the first service.',
    bullets: [  { label: 'Smile Design', href: '/services/smiledesign' },
    {
      label:
        'Veneers',
      href: '/services/veneers',
    },
    { label: 'Crowns', href: '/services/crowns' },
    { label: 'Teeth Whitening', href: '/services/teethwhitening' },
    { label: 'Crown Lengthening', href: '/services/crownlengthening' },
    { label: 'Gingival/Gum Contouring', href: '/services/gingivalgumcontouring' },
    { label: 'Fillings (Resin and porcelain)', href: '/services/fillings' },
    { label: 'Root Canals', href: '/services/rootcanals' },],
  },
  {
    title: 'Oral and Perio Surgery',
    description: 'This is a brief description of the second service.',
    bullets: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
  },
  {
    title: 'Implants and Prosthetics',
    description: 'This is a brief description of the second service.',
    bullets: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
  },
  {
    title: 'Preventative Dentistr',
    description: 'This is a brief description of the second service.',
    bullets: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
  },
  {
    title: 'Sedation',
    description: 'This is a brief description of the second service.',
    bullets: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
  },
  {
    title: 'Technological Advancements',
    description: 'This is a brief description of the second service.',
    bullets: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
  },
  // Add more services as needed
];
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
        path: 'services',
        element: <ServicesPage />,
        children: [
          {
            index: true,
            element:  <div className="service-container">
            {services.map((service, index) => (
              <ServiceComponent
                key={index}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
          },
          {
            path:"smiledesign",
            element: <SmileDesignComponent />
          },
          {
            path:"veneers",
            element: <Veneers />
          },
          {
            path:"crowns",
            element: <div>crowns</div>
          },
          {
            path:"teethwhitening",
            element: <div>teethwhitening</div>
          },
          {
            path:"crownlengthening",
            element: <div>crownlengthening</div>
          },
          {
            path:"Gingivalgumcontouring",
            element: <div>Gingivalgumcontouring</div>
          },
          {
            path:"fillings",
            element: <div>fillings</div>
          },
          {
            path:"rootcanals",
            element: <div>rootcanals</div>
          },
          {
            path:"toothextractions",
            element: <div>tooth extractions</div>
          },
          {
            path:"fullmouthextractions",
            element: <div>full mouth extractions</div>
          },
          {
            path:"boneaugmentations",
            element: <div>boneaugmentations</div>
          },
          {
            path:"gumtreatment",
            element: <div>gum treatment</div>
          },
          {
            path:"implanttreatment",
            element: <div>implant treatment extractions</div>
          },
          {
            path:"failedimplanttreatment",
            element: <div>failed implant treatment</div>
          },
          {
            path:"sinuslift",
            element: <div>sinus lift</div>
          },
          { 
            path:"implantsupporteddentures",
            element: <div>implant supported dentures</div>
          },
          {
            path:"allonxandallon4s",
            element: <div>allonxandallon4s</div>
          },
          {
            path:"otherprosthetics",
            element: <div>otherprosthetics</div>
          },
          {
            path:"checkupandcleanings",
            element: <div>checkupandcleanings</div>
          },
          {
            path:"sealants",
            element: <div>sealants</div>
          },
          {
            path:"flouride treatments",
            element: <div>flouride treatments</div>
          },
          {
            path:"ivanesthesiasedation",
            element: <div>iv anesthesia sedation</div>
          },
          {
            path:"oral sedation",
            element: <div>flouride treatments</div>
          },
          {
            path:"3dimaging",
            element: <div>3d</div>
          },
          {
            path:"intraoralscanners",
            element: <div>intraoralscanners</div>
          },
          {
            path:"biolaselaser",
            element: <div>biolase laser</div>
          },
          {
            path:"softtissuelasers",
            element: <div>soft tissue lasers</div>
          },
          {
            path:"bonegrafting",
            element: <div>bone grafting</div>
          },

        ]
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
