import Info from '@/app/_components/contents/Info';
import About from '@/app/_components/contents/About';
import Experience from '@/app/_components/contents/Experience';
import SkillStack from '@/app/_components/contents/SkillStack';

export default function Main() {
  return (
    <main>
      <Info />
      <div>
        <About />
        <SkillStack />
        <Experience />
      </div>
    </main>
  );
}
