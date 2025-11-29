import { Skill } from '@/app/_components/contents/experience/skills.type';

export const about = {
  content: [
    '안녕하세요, 4년차 풀스택 개발자 **김민기**입니다.',
    '백엔드 개발을 중심으로 안정적이고 **확장 가능한 서비스**를 만드는 것에 집중하고 있습니다. 사용자 인증 시스템 구축부터 데이터베이스 설계, API 성능 개선까지 실제 서비스 운영 환경에서 발생하는 **다양한 문제**들을 해결해왔습니다.',
    '프론트엔드 개발에서는 **사용자 경험**을 최우선으로 생각하며 직관적이고 반응성 좋은 인터페이스를 만들기 위해 노력합니다. 백엔드와 프론트엔드를 모두 이해하고 있기에 **전체 서비스 흐름을 고려한 개발**이 가능합니다.',
    '최근에는 인프라와 배포 자동화 영역까지 확장하여 컨테이너 기술을 활용한 **효율적인 배포 환경 구축**과 지속적 통합/배포 파이프라인을 직접 구현하고 있습니다. 개발부터 운영까지 전 과정을 이해하는 개발자로 성장하고 있습니다.',
    '클린 코드와 **효율적인 개발 프로세스**를 중요하게 생각하며, 이론보다는 실제로 동작하는 결과물을 만드는 것을 선호합니다. 새로운 기술은 직접 프로젝트에 적용해보면서 배우는 **실전형 학습 방식**을 따르고 있습니다.'
  ]
};

export type TExperience = { title: string, titleLink: string, content: string, date: string, skills: Skill[] };

export const experiences: TExperience[] = [
  {
    title: 'WillbeSoft',
    titleLink: 'https://www.wbsoft.kr',
    content: `\
      윌비소프트에서 Spring Boot 기반 백엔드 개발을 주로 담당하며,
      MySQL, Oracle, PostgreSQL 등 다양한 데이터베이스 환경에서 서비스 개발과 데이터 마이그레이션을 수행했습니다.

      JSP 기반 화면 개발부터 Vue.js와 Nuxt.js를 활용한 웹 프론트엔드 개발까지 경험하며
      서비스 전반을 이해하고 풀스택 역량을 자연스럽게 확장할 수 있었습니다.

      또한 JWT 기반의 인증/인가 기능을 직접 구현해 보안성과 사용자 관리 체계를 강화했고,
      Docker를 활용한 배포와 Jenkins를 이용한 CI/CD 파이프라인 구축을 통해
      개발-배포 자동화 환경을 개선하여 운영 효율을 높였습니다.

      이러한 경험을 통해 안정적인 서비스 구축은 물론,
      운영과 배포까지 고려하는 개발자로 성장하게 되었습니다.`,
    date: '2022.4 — 2025.2',
    skills: [
      Skill.JQuery,
      Skill.VueJS,
      Skill.NuxtJS,
      Skill.Docker,
      Skill.Spring,
      Skill.MySQL,
      Skill.Java,
      Skill.Jenkins,
      Skill.Linux,
      Skill.IntelliJIDEA
    ]
  }
];
