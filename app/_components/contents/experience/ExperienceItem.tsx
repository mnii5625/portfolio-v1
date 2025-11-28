import { Skill } from '@/app/_components/contents/experience/skills.type';
import SkillSet from '@/app/_components/contents/experience/SkillSet';

export default function ExperienceItem() {
  return (
    <>
      <div>
        <p className="mb-2 text-sm uppercase">
          2022 — 2025
        </p>
        <h3 className="mb-1 font-bold">
          <a href="https://www.wbsoft.kr" target="_blank">Willbe Soft</a>

        </h3>
        <p className="mb-4 text-sm text-wrap break-all text-muted-foreground">
          descriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptions
        </p>
        <div className="flex gap-2">
          <SkillSet skills={[Skill.JavaScript, Skill.Docker]} />
        </div>
      </div>
    </>
  );
}
