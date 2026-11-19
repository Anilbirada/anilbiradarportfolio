import React from 'react';
import { Navbar } from './components/Navbar';
import { NeuralHero } from './components/NeuralHero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceSection } from './components/ExperienceSection';
import { GitHubSection } from './components/GitHubSection';
import { TimelineSection } from './components/TimelineSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070913] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Section 1: Hero Section */}
        <NeuralHero />

        {/* Section 2: Professional About Me */}
        <AboutSection />

        {/* Section 3: Technical Expertise */}
        <SkillsSection />

        {/* Section 4 & 5: Featured AI Projects & Technical Architecture */}
        <FeaturedProjects />

        {/* Section 6: Professional Experience */}
        <ExperienceSection />

        {/* Section 7: GitHub Integration */}
        <GitHubSection />

        {/* Section 8: Engineering Journey */}
        <TimelineSection />

        {/* Section 9: Resume */}
        <ResumeSection />

        {/* Section 10: Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
