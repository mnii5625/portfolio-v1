import { Skill } from '@/app/_components/contents/experience/skills.type';
import SkillIcon from '@/app/_components/contents/experience/SkillIcon';

export default function SkillSet({ skills, size }: { skills: Skill[], size?: number }) {
  return (
    <>
      <ul className="flex gap-1">
        { skills.map(skill => <li key={skill}><SkillIcon skill={skill} size={size} /></li>) }
      </ul>
    </>
  );
}
