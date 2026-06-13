import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
// import Heritage from "@/pages/Heritage/Heritage";
// import Academics from "@/pages/Academics/Academics";
// import StudentLife from "@/pages/StudentLife/StudentLife";
// import Boarding from "@/pages/Boarding/Boarding";
// import Sports from "@/pages/Sports/Sports";
// import Gallery from "@/pages/Gallery/Gallery";
// import VirtualTour from "@/pages/VirtualTour/VirtualTour";
// import Admissions from "@/pages/Admissions/Admissions";
// import Alumni from "@/pages/Alumni/Alumni";
// import News from "@/pages/News/News";
// import Contact from "@/pages/Contact/Contact";
// import Developer from "@/pages/Developer/Developer";
// import NotFound from "@/pages/NotFound/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/heritage" element={<Heritage />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/boarding" element={<Boarding />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/developer" element={<Developer />} /> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}