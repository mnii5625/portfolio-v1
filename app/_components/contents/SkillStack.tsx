'use client';

import ContentsHeader from '@/app/_components/ui/ContentsHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Category, Skill, SkillMeta, skillSort } from '@/app/_components/contents/experience/skills.type';
import SkillIcon from '@/app/_components/contents/experience/SkillIcon';
import { eu } from '@/lib/enum.utils';
import { useEffect, useState } from 'react';

type CategoryTabType = keyof typeof Category | 'TAB_ALL';

function SkillFilter({ categoryKey }: { categoryKey: CategoryTabType }) {
  const category = categoryKey !== 'TAB_ALL' ? eu.fromKey(Category, categoryKey) : undefined;

  const blurSkills = category !== undefined
    ? eu.values(Skill).filter(skill => !SkillMeta[skill].categories.includes(category))
    : [];

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {
          skillSort(eu.values(Skill)).map(skill => (
            <SkillIcon
              className={blurSkills.includes(skill)
                ? 'scale-85 blur-xs grayscale transition-all duration-400 ease-in-out'
                : 'transition-all duration-400'}
              skill={skill}
              size={45}
              key={skill}
            />
          ))
        }
      </div>
    </>
  );
}

export default function SkillStack() {
  const [currentTab, setCurrentTab] = useState<CategoryTabType>('TAB_ALL');

  const onValueChange = (value: string) => {
    setCurrentTab(value as CategoryTabType);
  };

  return (
    <>
      <section id="skills" className="lg:scroll-mt-24">
        <ContentsHeader>Skills</ContentsHeader>
        <div className="mx-5 space-y-5">
          <Tabs value={currentTab} onValueChange={onValueChange}>
            <TabsList>
              <TabsTrigger value="TAB_ALL">전체</TabsTrigger>
              {
                eu.keys(Category).map(name => (
                  <TabsTrigger value={name} key={name}>{ name }</TabsTrigger>
                ))
              }
            </TabsList>
          </Tabs>

          <SkillFilter categoryKey={currentTab} />
        </div>

      </section>
    </>
  );
}
