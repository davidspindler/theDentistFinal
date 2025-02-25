import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
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
// import ServiceComponent from './components/ServiceLayout';
import SmileDesign from './components/SmileDesign';
import Veneers from './components/Veneers';
import Crowns from './components/Crowns';
import TeethWhitening from './components/TeethWhitening';
import CrownLengthening from './components/CrownLenghthening';
import GingivalGumContouring from './components/GingivalGumContouring';
import Fillings from './components/Fillings';
import RootCanals from './components/RootCanals';
import ToothExtractions from './components/ToothExtractions';
import ImplantTreatment from './components/ImplantTreatment';
import CheckupAndCleanings from './components/CheckupAndCleanings';
import OralSedation from './components/OralSedation';
import Threedimagectscans from './components/3dimagectscans';
import Ivanesthesiasedation from './components/ivanesthesiasedation';
import BoneGrafting from './components/BoneGrafting';
import BiolaseLaser from './components/BiolaseLaser';
import IntraoralScanners from './components/IntraoralScanners';
import SoftTissueLasers from './components/SoftTissueLasers';
import Sealants from './components/Sealants';
import FlourideTreatments from './components/FlourideTreatments';
import FailedImplantTreatment from './components/FailedImplantTreatment';
import SinusLift from './components/SinusLift';
import ImplantSupportedDentures from './components/ImplantSupportedDentures';
import AllOnX from './components/AllOnX';
import OtherProsthetics from './components/OtherProsthetics';
import FullMouthExtractions from './components/FullMouthExtractions';
import BoneAugmentations from './components/BoneAugmentations';
import GumTreatment from './components/GumTreatment';
import OCCFAD from './components/OCCFAD';
import Address from './components/Address';
import MeettheDoctors from './components/MeetTheDoctors';
import OfficeTour from './components/OfficeTour';
import PatientExperiences from './components/PatientExperiences';
import LegalDisclaimers from './components/PrivacyPolicy';
import DentalPrinters from './components/DentalPrinters';
import Inlays from './components/Inlays.jsx'
// const services = [
//   {
//     title: 'Cosmetic and Restorative Dentistry',
//     description: 'This is a brief description of the first service.',
//     bullets: [{ label: 'Smile Design', href: '/services/smiledesign' },
//     {
//       label:
//         'Veneers/Crowns',
//       href: '/services/veneers',
//     },
//     { label: 'Crowns', href: '/services/crowns' },
//     { label: 'Teeth Whitening', href: '/services/teethwhitening' },
//     { label: 'Crown Lengthening', href: '/services/crownlengthening' },
//     { label: 'Gingival/Gum Contouring', href: '/services/gingivalgumcontouring' },
//     { label: 'Fillings (Resin and porcelain)', href: '/services/fillings' },
//     { label: 'Root Canals', href: '/services/rootcanals' },],
//   },
//   {
//     title: 'Oral and Perio Surgery',
//     description: 'This is a brief description of the second service.',
//     bullets: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
//   },
//   {
//     title: 'Implants and Prosthetics',
//     description: 'This is a brief description of the second service.',
//     bullets: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
//   },
//   {
//     title: 'Preventative Dentistr',
//     description: 'This is a brief description of the second service.',
//     bullets: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
//   },
//   {
//     title: 'Sedation',
//     description: 'This is a brief description of the second service.',
//     bullets: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
//   },
//   {
//     title: 'Technological Advancements',
//     description: 'This is a brief description of the second service.',
//     bullets: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
//   },
//   // Add more services as needed
// ];
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
        path: 'privacypolicy',
        element: <LegalDisclaimers />,

      },
      {
        path: 'services',
        element: <ServicesPage />,
        children: [
          {
            index: true,
            //   element:  <div className="service-container">
            //   {services.map((service, index) => (
            //     <ServiceComponent
            //       key={index}
            //       title={service.title}
            //       description={service.description}
            //       bullets={service.bullets}
            //       isEven={index % 2 === 0}
            //     />
            //   ))}
            // </div>
            element: <Navigate to="smiledesign" />
          },
          {
            path: "smiledesign",
            element: <SmileDesign />
          },
          {
            path: "veneers",
            element: <Veneers />
          },
          {
            path: "crowns",
            element: <Crowns />
          },
          {
            path: "teethwhitening",
            element: <TeethWhitening />
          },
          {
            path: "inlays",
            element: <Inlays />
          },
          {
            path: "crownlengthening",
            element: <CrownLengthening />
          },
          {
            path: "Gingivalgumcontouring",
            element: <GingivalGumContouring />
          },
          {
            path: "fillings",
            element: <Fillings />
          },
          {
            path: "rootcanals",
            element: <RootCanals />
          },
          {
            path: "toothextractions",
            element: <ToothExtractions />
          },
          {
            path: "fullmouthextractions",
            element: <FullMouthExtractions />
          },
          {
            path: "boneaugmentations",
            element: <BoneAugmentations />
          },
          {
            path: "gumtreatment",
            element: <GumTreatment />
          },
          {
            path: "implanttreatment",
            element: <ImplantTreatment />
          },
          {
            path: "failedimplanttreatment",
            element: <FailedImplantTreatment />
          },
          {
            path: "sinuslift",
            element: <SinusLift />
          },
          {
            path: "implantsupporteddentures",
            element: <ImplantSupportedDentures />
          },
          {
            path: "allonx",
            element: <AllOnX />
          },
          {
            path: "otherprosthetics",
            element: <OtherProsthetics />
          },
          {
            path: "checkupandcleanings",
            element: <CheckupAndCleanings />
          },
          {
            path: "sealants",
            element: <Sealants />
          },
          {
            path: "flouridetreatments",
            element: <FlourideTreatments />
          },
          // {
          //   path: "moderatesedation",
          //   element: <Ivanesthesiasedation />
          // },
          {
            path: "sedation",
            element: <Ivanesthesiasedation />
          },
          {
            path: "3DDentalPrinters",
            element: <DentalPrinters />
          },
          {
            path: "3dimagectscans",
            element: <Threedimagectscans />
          },
          {
            path: "intraoralscanners",
            element: <IntraoralScanners />
          },
          {
            path: "biolaselaser",
            element: <BiolaseLaser />
          },
          {
            path: "softtissuelasers",
            element: <SoftTissueLasers />
          },
          // {
          //   path: "bonegrafting",
          //   element: <BoneGrafting />
          // },

        ]
      },
      {
        path: 'about',
        element: <AboutPage />,
        children: [
          {
            index: true,
            element: <Navigate to="occfad" />
          },
          {
            // index: true,
            path: "OCCFAD",
            element: <OCCFAD />
          },
          {
            path: "address",
            element: <Address />
          },
          {
            path: "meetthedoctors",
            element: <MeettheDoctors />
          },
          {
            path: "officetour",
            element: <OfficeTour />
          },
          {
            path: "patientexperiences",
            element: <PatientExperiences />
          },

        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
