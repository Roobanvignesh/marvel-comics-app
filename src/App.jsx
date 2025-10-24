import Header from "./component/Header/Header.jsx";
import "./App.css";
import { useState } from "react";
import Login from "./pages/Login/Login.jsx";
import { Routes, Route } from "react-router-dom";
import NewRelease from "./pages/New_release/NewRelease.jsx";
import Home from "./pages/Home/Home.jsx";
import ComicDetail from "./pages/ComicDetail/ComicDetail.jsx";
import CommunitySection from "./pages/Community-section/CommunitySection.jsx";
import Footer from "./component/Footer/Footer.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header setShowLogin={setShowLogin} />
      {showLogin && <Login setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comic" element={<NewRelease />} />
        <Route path="/comic/:seriesSlug/:issueNumber" element={<ComicDetail />} />
        <Route path="/community" element={<CommunitySection />} />
        <Route
          path="*"
          element={<h2 style={{ textAlign: "center" }}>Page Not Found</h2>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
