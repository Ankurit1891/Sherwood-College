import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import AboutSection from '@/components/AboutSection';
import HeritageTimeline from '@/components/HeritageTimeline';
import AcademicsSection from '@/components/AcademicsSection';
import CampusExperience from '@/components/CampusExperience';
import AcademicExcellence from '@/components/AcademicExcellence';
import StudentLifeStory from '@/components/StudentLifeStory';
import Achievements from '@/components/Achievements';
import GalleryPreview from '@/components/GalleryPreview';
import Testimonials from '@/components/Testimonials';
import AdmissionsCTA from '@/components/AdmissionsCTA';
// import Journey from '@/components/Journey';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Journey /> */}
      <Stats />
      <AboutSection />
      <CampusExperience />
      <AcademicExcellence />
      <StudentLifeStory />
      <Achievements />
      <GalleryPreview />
      <Testimonials />
      <AdmissionsCTA />
      <HeritageTimeline />
      <AcademicsSection />
    </>
  );
}
