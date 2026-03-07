import { DiCelluloid } from "react-icons/di";
import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import StatsSection from "../components/StatsSection";
import { div } from "framer-motion/client";

function Profile(){
    return(
        <div className="min-h-screen bg-[#020617] text-white">
            <Navbar/>
                  <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
                    <ProfileHeader />

        <div className="grid md:grid-cols-2 gap-6">
          <SkillsSection />
          <StatsSection />
        </div>
        <ProjectsSection/>
                    </div>

        </div>
    )
}

export default Profile;