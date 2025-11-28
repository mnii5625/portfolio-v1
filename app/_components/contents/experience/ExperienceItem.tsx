import SkillIcon from '@/app/_components/contents/experience/SkillIcon';
import { Skill } from '@/app/_components/contents/experience/skills.type';

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
        <p className="mb-4 text-sm text-wrap break-all">
          descriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptionsdescriptions
        </p>
        <div className="flex gap-2">
          <SkillIcon skill={Skill.Docker} />
          <SkillIcon skill={Skill.IntelliJIDEA} />
          <SkillIcon skill={Skill.JavaScript} />
        </div>
      </div>
    </>
  );
}
