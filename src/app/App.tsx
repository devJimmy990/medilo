import routes from "core/routes";
import { lazy, FC, memo } from "react";
import { Routes, Route } from "react-router-dom";


const Header = lazy(() => import("components/shared/Header"));
const Footer = lazy(() => import("components/shared/Footer"));


const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default memo(App);
