import Info from '@/app/_components/contents/Info';
import About from '@/app/_components/contents/About';
import Experience from '@/app/_components/contents/Experience';
import SkillStack from '@/app/_components/contents/SkillStack';
import Project from '@/app/_components/contents/Project';

export default function Main() {
  return (
    <main className="pb-12">
      <Info />
      <div className="space-y-24">
        <About />
        <SkillStack />
        <Experience />
        <Project />
      </div>
    </main>
  );
}
