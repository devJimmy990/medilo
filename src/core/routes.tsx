import DoctorDetails from "app/DoctorDetails";
import { lazy, ReactNode } from "react";

const Home = lazy(() => import("../app/Home"));
const About = lazy(() => import("../app/About"));
const Blogs = lazy(() => import("../app/Blogs"));
const Contact = lazy(() => import("../app/Contact"));
const Doctors = lazy(() => import("../app/Doctors"));
const Services = lazy(() => import("../app/Services"));
const Appointment = lazy(() => import("../app/Appointment"));
const NotFound = lazy(() => import("../app/NotFound"));

type Route = { path: string; element: ReactNode };

const routes: Route[] = [
  { path: "/", element: <Home /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/doctors", element: <Doctors /> },
  { path: "/services", element: <Services /> },
  { path: "/appointment", element: <Appointment /> },
  { path: "/details-doctor", element: <DoctorDetails /> },
  { path: "*", element: <NotFound /> },
];

const Routes = Object.freeze({
  Home: "/",
  About: "/about",
  Blogs: "/blogs",
  Contact: "/contact",
  Doctors: "/doctors",
  Services: "/services",
  Appointment: "/appointment",
  DetailsDoctor: "/details-doctor",
});

export { Routes };
export default routes;
