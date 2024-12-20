import routes from "core/routes";
import { lazy, Suspense } from "react";
import Footer from "components/shared/Footer";
import Header from "components/shared/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Loader = lazy(() => import("../components/Loader"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
