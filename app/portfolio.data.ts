import { Skill } from '@/app/_components/contents/experience/skills.type';

const dedent = (str: string) => {
  const lines = str.split('\n');
  const minIndent = lines
    .filter(line => line.trim())
    .reduce((min, line) => {
      const indent = line.match(/^\s*/)?.[0].length || 0;
      return Math.min(min, indent);
    }, Infinity);

  return lines
    .map(line => line.slice(minIndent))
    .join('\n');
};

export const sections = [
  {
    title: 'About',
    id: 'about'
  },
  {
    title: 'Certificates',
    id: 'certificates'
  },
  {
    title: 'Skills',
    id: 'skills'
  },
  {
    title: 'Experience',
    id: 'experience'
  },
  {
    title: 'Projects',
    id: 'projects'
  }
];

export const about = {
  content: [
    '안녕하세요, 4년차 풀스택 개발자 **김민기**입니다.',
    '백엔드 개발을 중심으로 안정적이고 **확장 가능한 서비스**를 만드는 것에 집중하고 있습니다. 사용자 인증 시스템 구축부터 데이터베이스 설계, API 성능 개선까지 실제 서비스 운영 환경에서 발생하는 **다양한 문제**들을 해결해왔습니다.',
    '프론트엔드 개발에서는 **사용자 경험**을 최우선으로 생각하며 직관적이고 반응성 좋은 인터페이스를 만들기 위해 노력합니다. 백엔드와 프론트엔드를 모두 이해하고 있기에 **전체 서비스 흐름을 고려한 개발**이 가능합니다.',
    '최근에는 인프라와 배포 자동화 영역까지 확장하여 컨테이너 기술을 활용한 **효율적인 배포 환경 구축**과 지속적 통합/배포 파이프라인을 직접 구현하고 있습니다. 개발부터 운영까지 전 과정을 이해하는 개발자로 성장하고 있습니다.',
    '클린 코드와 **효율적인 개발 프로세스**를 중요하게 생각하며, 이론보다는 실제로 동작하는 결과물을 만드는 것을 선호합니다. 새로운 기술은 직접 프로젝트에 적용해보면서 배우는 **실전형 학습 방식**을 따르고 있습니다.'
  ]
};

export const certificates = [
  {
    date: '2023',
    title: '정보처리기사',
    issuer: '한국산업인력공단'
  },
  {
    date: '2023',
    title: 'SQLD ( SQL Developer )',
    issuer: '한국데이터산업진흥원'
  }
];

export type TExperience = { title: string, link: string, content: string, date: string, skills: Skill[] };

export const experiences: TExperience[] = [
  {
    title: 'WillbeSoft',
    link: 'https://www.wbsoft.kr',
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
    date: '2022.4 — 2025.3',
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

export type TProject = { title: string, link: string, content: string, skills: Skill[], image: string };

export const projects: TProject[] = [
  {
    title: 'Portfolio',
    link: '',
    content: dedent(`\
      **Next.js**와 **TailwindCSS** 기반 개인 포트폴리오 웹사이트입니다.
      SSR을 활용한 SEO 최적화와 빠른 로딩 속도를 구현했으며, **반응형 디자인**과 **다크모드**를 지원합니다.
      **Jenkins, Harbor, ArgoCD를 활용한 CI/CD 파이프라인**으로 홈서버 **Kubernetes** 클러스터에 **GitOps** 방식으로 배포했습니다.
    `),
    skills: [
      Skill.NextJS,
      Skill.TailwindCSS,
      Skill.Kubernetes,
      Skill.Docker,
      Skill.Jenkins
    ],
    image: '/portfolio.png'
  },
  {
    title: 'CMS',
    link: '',
    content: dedent(`\
      골프 입장권 예약 및 결제 통합 CMS
      **React**와 **NestJS** 기반의 풀스택 웹 애플리케이션으로, 골프장 입장권 구매 및 예약 서비스를 제공합니다.
      사용자는 날짜와 시간을 선택하여 입장권을 예약하고 온라인 결제를 통해 즉시 구매할 수 있으며, 관리자 페이지에서는 입장권 상품 관리, 예약 현황 모니터링, 결제 내역 및 매출 통계 조회 등 운영에 필요한 기능을 제공합니다.
      NestJS의 **모듈 기반 아키텍처**로 도메인별 계층을 분리했으며, **TypeScript**를 활용하여 엔드투엔드 타입 안정성을 확보했습니다. **Redis 캐싱**을 통해 자주 조회되는 데이터의 성능을 최적화했습니다.
    `),
    skills: [
      Skill.React,
      Skill.NestJS,
      Skill.MySQL,
      Skill.JavaScript,
      Skill.TypeScript,
      Skill.Prisma,
      Skill.CSS
    ],
    image: '/cms.png'
  },
  {
    title: '뭉클',
    link: 'https://play.google.com/store/apps/details?id=com.g3.thx&hl=ko',
    content: dedent(`\
      감사일기 작성 **하이브리드 모바일 앱** (웹 파트)
      **Vue.js** 기반의 웹 애플리케이션을 네이티브 앱의 **웹뷰 컨테이너** 내에서 실행하는 **하이브리드 앱**으로, 사용자가 일상 속 감사한 순간들을 기록하고 관리할 수 있는 인터페이스를 구현했습니다.
      반응형 UI와 **컴포넌트 기반 아키텍처**로 구성했으며, **JavaScript 브릿지 통신**을 통해 카메라, 푸시 알림 등의 **네이티브 기능과 연동**되도록 설계했습니다. 
      **OpenAI API**를 활용하여 사용자의 일기에 공감과 격려를 담은 **자동 댓글 기능**과 주간/월간 감사 패턴을 분석한 **리포트 기능**을 추가하여, 사용자의 지속적인 일기 작성 동기를 부여하고 긍정적인 심리 변화를 시각적으로 확인할 수 있도록 했습니다.
    `),
    skills: [
      Skill.VueJS,
      Skill.NuxtJS,
      Skill.Spring,
      Skill.CSS
    ],
    image: '/moongcle.png'
  }
];
