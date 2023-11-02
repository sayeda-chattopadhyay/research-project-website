import "./App.css";
import { Route, Routes } from "react-router-dom";

// import all pages

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ResearchPage from "./pages/research";
import ResearchDetails from "./pages/researchDetails";
import PublicationsPage from "./pages/publications";
import NewsAndUpdatePage from "./pages/newsAndUpdates";
import NotFoundPage from "./pages/pageNotFound";

// import  components

import BaseLayout from "./components/layouts/baselayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route
          path="/researchDetails/:projectId"
          element={<ResearchDetails />}
        />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/news" element={<NewsAndUpdatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
