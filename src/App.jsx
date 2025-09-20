import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainPage from "./pages/MainPage";
import CityPage from "./pages/CityPage";
import NotFoundPage from "./pages/NotFoundPage";
import AppFrame from "./components/AppFrame";

const AppLayout = ({ children }) => {
  const location = useLocation();
  
  // Don't show AppFrame on the welcome page
  if (location.pathname === '/') {
    return children;
  }
  
  return <AppFrame>{children}</AppFrame>;
};

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/city" element={<CityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
