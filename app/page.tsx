import Info from '@/app/_components/contents/Info';
import About from '@/app/_components/contents/About';
import Experience from '@/app/_components/contents/Experience';
import SkillStack from '@/app/_components/contents/SkillStack';
import Project from '@/app/_components/contents/Project';
import Certificate from '@/app/_components/contents/Certificate';

export default function Main() {
  return (
    <main className={`
      mx-auto max-w-screen-xl pb-12
      lg:flex lg:px-12
    `}
    >
      <Info className="lg:sticky lg:top-0 lg:h-screen lg:w-[48%] lg:py-24" />
      <div className={`
        space-y-24
        lg:w-[52%] lg:py-[72px]
      `}
      >
        <About />
        <Certificate />
        <SkillStack />
        <Experience />
        <Project />
      </div>
    </main>
  );
}
