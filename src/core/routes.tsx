import { lazy, ReactNode } from "react";

const Home = lazy(() => import("../app/Home"));
const About = lazy(() => import("../app/About"));
const Contact = lazy(() => import("../app/Contact"));
const Doctors = lazy(() => import("../app/Doctors"));
const Services = lazy(() => import("../app/Services"));

type Route = {
    path: string,
    element: ReactNode
}
const routes: Route[] = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/doctors", element: <Doctors /> },
    { path: "/services", element: <Services /> },
];

export default routes;
