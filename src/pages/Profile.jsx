import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import StatsSection from "../components/StatsSection";
import AnimatedBackground from "../components/AnimatedBackground";

function Profile() {
  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-x-hidden">

      <AnimatedBackground />
      <Navbar />

      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-32 pb-20">

        {/* HEADER */}
        <div className="mb-10 sm:mb-14 w-full">
          <ProfileHeader />
        </div>

        {/* SKILLS + STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-10 sm:mb-14 text-sm w-full">

          <div className="w-full min-w-0">
            <SkillsSection />
          </div>

          <div className="w-full min-w-0">
            <StatsSection />
          </div>

        </div>

        {/* PROJECTS */}
        <div className="mt-6 sm:mt-10 w-full text-sm">
          <div className="w-full min-w-0">
            <ProjectsSection />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;