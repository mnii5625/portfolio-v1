import { skillSort } from '@/app/_components/contents/experience/skills.type';
import SkillSet from '@/app/_components/contents/experience/SkillSet';
import { TExperience } from '@/app/portfolio.data';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function ExperienceItem({ experience }: { experience: TExperience }) {
  return (
    <>
      <div className="group">
        <p className="mb-2 text-xs text-muted-foreground uppercase">
          { experience.date }
        </p>
        <h3 className="mb-2 font-bold tracking-wide">
          <span className="group/link">
            <Link
              href={experience.titleLink}
              target="_blank"
              className={`
                transition-all duration-150
                group-hover/link:text-primary
              `}
            >
              { experience.title }
              <ArrowUpRight
                className={`
                  ml-1 inline-block transition-all duration-150
                  group-hover/link:translate-x-1 group-hover/link:-translate-y-1
                `}
                size={16}
              />
            </Link>
          </span>

        </h3>
        <p className="mb-4 text-sm text-wrap break-keep whitespace-pre-line text-muted-foreground">
          { experience.content }
        </p>
        <div className="flex gap-2">
          <SkillSet skills={skillSort(experience.skills)} size={30} />
        </div>
      </div>
    </>
  );
}
