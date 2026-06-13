import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import AboutSection from '@/components/AboutSection';
import HeritageTimeline from '@/components/HeritageTimeline';
import AcademicsSection from '@/components/AcademicsSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <HeritageTimeline />
      <AcademicsSection />
    </>
  );
}
