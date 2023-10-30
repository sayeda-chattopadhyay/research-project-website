import "./App.css";
import { Route, Routes } from "react-router-dom";

// import all pages

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ResearchPage from "./pages/research";
import PublicationsPage from "./pages/publications";
import NewsAndUpdatePage from "./pages/news";
import NotFoundPage from "./pages/notfound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/publications" element={<PublicationsPage />} />
      <Route path="/news" element={<NewsAndUpdatePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
