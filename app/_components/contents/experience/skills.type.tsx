import Docker from './svg/Docker.svg';
import IdeaDark from './svg/Idea-Dark.svg';
import IdeaLight from './svg/Idea-Light.svg';
import JavaDark from './svg/Java-Dark.svg';
import JavaLight from './svg/Java-Light.svg';
import JavaScript from './svg/JavaScript.svg';
import JenkinsDark from './svg/Jenkins-Dark.svg';
import JenkinsLight from './svg/Jenkins-Light.svg';
import Kubernetes from './svg/Kubernetes.svg';
import LinuxDark from './svg/Linux-Dark.svg';
import LinuxLight from './svg/Linux-Light.svg';
import NestJSDark from './svg/NestJS-Dark.svg';
import NestJSLight from './svg/NestJS-Light.svg';
import NextJSDark from './svg/NextJS-Dark.svg';
import NextJSLight from './svg/NextJS-Light.svg';
import Nginx from './svg/Nginx.svg';
import NuxtJSDark from './svg/NuxtJS-Dark.svg';
import NuxtJSLight from './svg/NuxtJS-Light.svg';
import PostgreSQLDark from './svg/PostgreSQL-Dark.svg';
import PostgreSQLLight from './svg/PostgreSQL-Light.svg';
import ReactDark from './svg/React-Dark.svg';
import ReactLight from './svg/React-Light.svg';
import SpringDark from './svg/Spring-Dark.svg';
import SpringLight from './svg/Spring-Light.svg';
import TypeScript from './svg/TypeScript.svg';
import VueJSDark from './svg/VueJS-Dark.svg';
import VueJSLight from './svg/VueJS-Light.svg';
import { FC, SVGProps } from 'react';

export enum Category {
  Frontend,
  Backend,
  Tool,
  Devops
}

export enum Skill {
  Docker,
  IntelliJIDEA,
  Java,
  JavaScript,
  Jenkins,
  Kubernetes,
  Linux,
  MySQL,
  NestJS,
  NextJS,
  Nginx,
  NuxtJS,
  PostgreSQL,
  React,
  Spring,
  TypeScript,
  VueJS
}

export const SkillMeta: Record<Skill, { name: string, dark: FC<SVGProps<SVGSVGElement>>, light: FC<SVGProps<SVGSVGElement>>, categories: Category }> = {
  [Skill.Docker]: {
    name: 'Docker',
    dark: Docker,
    light: Docker,
    categories: Category.Devops
  },
  [Skill.IntelliJIDEA]: {
    name: 'IntelliJ IDEA',
    dark: IdeaDark,
    light: IdeaLight,
    categories: Category.Tool
  },
  [Skill.Java]: {
    name: 'Java',
    dark: JavaDark,
    light: JavaLight,
    categories: Category.Backend
  },
  [Skill.JavaScript]: {
    name: 'JavaScript',
    dark: JavaScript,
    light: JavaScript,
    categories: Category.Frontend
  },
  [Skill.Jenkins]: {
    name: 'Jenkins',
    dark: JenkinsDark,
    light: JenkinsLight,
    categories: Category.Devops
  },
  [Skill.Kubernetes]: {
    name: 'Kubernetes',
    dark: Kubernetes,
    light: Kubernetes,
    categories: Category.Devops
  },
  [Skill.Linux]: {
    name: 'Linux',
    dark: LinuxDark,
    light: LinuxLight,
    categories: Category.Devops
  },
  [Skill.MySQL]: {
    name: 'MySQL',
    dark: PostgreSQLDark,
    light: PostgreSQLLight,
    categories: Category.Backend
  },
  [Skill.NestJS]: {
    name: 'NestJS',
    dark: NestJSDark,
    light: NestJSLight,
    categories: Category.Backend
  },
  [Skill.NextJS]: {
    name: 'NextJS',
    dark: NextJSDark,
    light: NextJSLight,
    categories: Category.Frontend
  },
  [Skill.Nginx]: {
    name: 'Nginx',
    dark: Nginx,
    light: Nginx,
    categories: Category.Devops
  },
  [Skill.NuxtJS]: {
    name: 'NuxtJS',
    dark: NuxtJSDark,
    light: NuxtJSLight,
    categories: Category.Frontend
  },
  [Skill.PostgreSQL]: {
    name: 'PostgreSQL',
    dark: PostgreSQLDark,
    light: PostgreSQLLight,
    categories: Category.Backend
  },
  [Skill.React]: {
    name: 'React',
    dark: ReactDark,
    light: ReactLight,
    categories: Category.Frontend
  },
  [Skill.Spring]: {
    name: 'Spring',
    dark: SpringDark,
    light: SpringLight,
    categories: Category.Backend
  },
  [Skill.TypeScript]: {
    name: 'TypeScript',
    dark: TypeScript,
    light: TypeScript,
    categories: Category.Frontend
  },
  [Skill.VueJS]: {
    name: 'VueJS',
    dark: VueJSDark,
    light: VueJSLight,
    categories: Category.Frontend
  }
};
