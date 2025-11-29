import Info from '@/app/_components/contents/Info';
import About from '@/app/_components/contents/About';
import Experience from '@/app/_components/contents/Experience';
import SkillStack from '@/app/_components/contents/SkillStack';
import Project from '@/app/_components/contents/Project';
import Certificate from '@/app/_components/contents/Certificate';
import Nav from '@/app/_components/ui/Nav';

export default function Main() {
  return (
    <div className={`
      mx-auto pb-12
      lg:flex lg:px-12
    `}
    >
      <header className="lg:sticky lg:top-0 lg:h-screen lg:w-[48%]">
        <Info />
        <Nav />
      </header>

      <main className={`
        space-y-24
        lg:w-[52%] lg:py-24
      `}
      >
        <About />
        <Certificate />
        <SkillStack />
        <Experience />
        <Project />
      </main>
    </div>
  );
}
