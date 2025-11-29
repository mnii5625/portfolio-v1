import { Skill, skillSort } from '@/app/_components/contents/experience/skills.type';
import SkillIcon from '@/app/_components/contents/experience/SkillIcon';

export default function SkillSet({ skills, size }: { skills: Skill[], size?: number }) {
  const sortedSkills = skillSort(skills);

  return (
    <>
      <ul className="flex gap-1">
        { sortedSkills.map(skill => <li key={skill}><SkillIcon skill={skill} size={size} /></li>) }
      </ul>
    </>
  );
}
