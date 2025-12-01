import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import SkillSet from '@/app/_components/contents/experience/SkillSet';
import { TProject } from '@/app/portfolio.data';
import Markdown from '@/app/_components/ui/Markdown';
import Image from 'next/image';

export default function ProjectItem({ project }: { project: TProject }) {
  return (
    <article className={`
      sm:grid sm:grid-cols-8 sm:gap-8
      md:gap-6
    `}
    >
      <div
        className={`
          relative mb-4 hidden aspect-video overflow-hidden rounded-sm border-2 border-border
          bg-muted
          sm:col-span-3 sm:block
        `}
      >
        <Image src={project.image} alt={project.image} fill className="object-cover" />
      </div>
      <div className="sm:col-span-5">
        <h3 className="mb-2 text-lg font-bold tracking-wide">
          <span className="group/link">
            {
              project.link
                ? (
                  <Link
                    href={project.link}
                    target="_blank"
                    className={`
                      transition-all duration-150
                      group-hover/link:text-primary
                    `}
                  >
                    { project.title }
                    <ArrowUpRight
                      className={`
                        ml-1 inline-block transition-all duration-150
                        group-hover/link:translate-x-1 group-hover/link:-translate-y-1
                      `}
                      size={16}
                    />
                  </Link>
                )
                : <span>{ project.title }</span>
            }

          </span>
        </h3>
        <div
          className={`
            relative mb-4 aspect-video w-50 overflow-hidden rounded-sm border-2 border-border
            bg-muted
            sm:hidden
          `}
        >
          <Image src={project.image} alt={project.image} fill className="object-cover" />
        </div>
        <div className="mb-4 text-sm text-wrap break-keep whitespace-pre-line text-muted-foreground">
          <Markdown>{ project.content }</Markdown>
        </div>

        <div className="mb-4 flex gap-2">
          <SkillSet skills={project.skills} size={30} />
        </div>
      </div>
    </article>
  );
}
