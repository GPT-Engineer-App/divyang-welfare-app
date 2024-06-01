import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Members from "./pages/Members.jsx";
import GamesActivities from "./pages/GamesActivities.jsx";
import MediaGallery from "./pages/MediaGallery.jsx";
import UpcomingProjects from "./pages/UpcomingProjects.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/members" element={<Members />} />
        <Route path="/games-activities" element={<GamesActivities />} />
        <Route path="/media-gallery" element={<MediaGallery />} />
        <Route path="/upcoming-projects" element={<UpcomingProjects />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
