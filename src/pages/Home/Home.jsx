import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import AboutSection from '@/components/AboutSection';
import HeritageTimeline from '@/components/HeritageTimeline';
import AcademicsSection from '@/components/AcademicsSection';
import CampusExperience from '@/components/CampusExperience';
import AcademicExcellence from '@/components/AcademicExcellence';
import StudentLifeStory from '@/components/StudentLifeStory';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <CampusExperience />
      <AcademicExcellence />
      <StudentLifeStory />
      <HeritageTimeline />
      <AcademicsSection />
    </>
  );
}
