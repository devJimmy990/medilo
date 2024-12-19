import { Suspense } from "react";
import routes from "core/routes";
import Footer from "components/shared/Footer";
import Header from "components/shared/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
