import ContentsHeader from '@/app/_components/ui/ContentsHeader';
import { projects } from '@/app/portfolio.data';
import ProjectItem from '@/app/_components/contents/project/ProjectItem';

export default function Project() {
  return (
    <>
      <section id="projects">
        <ContentsHeader>Project</ContentsHeader>
        <div className="space-y-12 px-6">
          { projects.map(project => <ProjectItem project={project} key={project.title} />) }
        </div>
      </section>
    </>
  );
}
