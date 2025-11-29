import ContentsHeader from '@/app/_components/ui/ContentsHeader';
import ExperienceItem from '@/app/_components/contents/experience/ExperienceItem';
import { experiences } from '@/app/portfolio.data';

export default function Experience() {
  return (
    <>
      <section id="experience">
        <ContentsHeader>Experience</ContentsHeader>
        <div className="px-6">
          { experiences.map(experience => <ExperienceItem experience={experience} key={experience.title} />) }
        </div>
      </section>
    </>
  );
}
