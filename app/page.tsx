import { HeaderComponent } from "./components/pages/Header.component";
import { OverviewComponent } from "./components/pages/Overview";
import { ProjectsComponent } from "./components/pages/Projects";
import { SkillsComponent } from "./components/pages/Skills";
import CoverParticles from "./components/ui/cover-particles";
import { TimeLineComponent } from "./components/ui/time-line";

export default function Home() {
  return (
    <div className="relative">
      <CoverParticles />
      <HeaderComponent />
      <OverviewComponent />
      <TimeLineComponent />
      <ProjectsComponent />
      <SkillsComponent />
    </div>
  );
}