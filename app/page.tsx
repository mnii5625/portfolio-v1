import Info from '@/app/_components/contents/Info';
import About from '@/app/_components/contents/About';
import Experience from '@/app/_components/contents/Experience';

export default function Main() {
  return (
    <main>
      <Info />
      <div>
        <About />
        <Experience />
      </div>
    </main>
  );
}
