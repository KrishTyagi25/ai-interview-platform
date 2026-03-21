import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import StatsSection from "../components/StatsSection";
import AnimatedBackground from "../components/AnimatedBackground";

function Profile() {
  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">

      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 pt-36 pb-24">

        {/* HEADER */}
        <div className="mb-12 sm:mb-16 scale-[0.98]">
          <ProfileHeader />
        </div>

        {/* SKILLS + STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-10 mb-12 sm:mb-16 text-[0.95rem]">
          <SkillsSection />
          <StatsSection />
        </div>

        {/* PROJECTS */}
        <div className="mt-8 sm:mt-12 text-[0.95rem]">
          <ProjectsSection />
        </div>

      </div>
    </div>
  );
}

export default Profile;