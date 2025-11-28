import ContentsHeader from '@/app/_components/ui/ContentsHeader';
import ExperienceItem from '@/app/_components/contents/experience/ExperienceItem';

export default function Experience() {
  return (
    <>
      <div>
        <ContentsHeader>Experience</ContentsHeader>
        <div className="px-6">
          <ExperienceItem />
        </div>
      </div>
    </>
  );
}
