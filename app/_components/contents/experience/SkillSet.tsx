import { Skill } from '@/app/_components/contents/experience/skills.type';
import SkillIcon from '@/app/_components/contents/experience/SkillIcon';

export default function SkillSet({ skills}: { skills: Skill[] }) {

  return <>
    <ul>
      { skills.map(skill => <li key={skill}><SkillIcon skill={skill}/></li>)
      }
    </ul>
  </>;
}