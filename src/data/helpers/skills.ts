import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const html5 = createSkillFactory({
  name: 'HTML 5',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://www.apollographql.com/',
});

export const allegro = createSkillFactory({
  name: 'Allegro',
  icon: 'simple-icons:allegro',
  iconColor: '#FF5A00',
  url: 'https://www.allegro.pl/',
});

export const kubernetes = createSkillFactory({
  name: 'Kubernetes (K8s)',
  icon: 'simple-icons:kubernetes',
  iconColor: '#326CE5',
  url: 'https://kubernetes.io//',
});

export const network = createSkillFactory({
  name: 'Network',
  icon: 'mdi:ip-network-outline',
  iconColor: '#21a3dd',
  url: 'https://www.tp-link.com/en/',
});

export const homelab = createSkillFactory({
  name: 'Homelab',
  icon: 'fluent-mdl2:my-network',
  iconColor: '#2E75B4',
  url: '',
});

export const portainer = createSkillFactory({
  name: 'Portainer',
  icon: 'devicon:portainer',
  iconColor: '#13BEF9',
  url: 'https://www.portainer.io/',
});

export const photoshop = createSkillFactory({
  name: 'Adobe Photoshop',
  icon: 'simple-icons:adobephotoshop',
  iconColor: '#31A8FF',
  url: 'https://www.adobe.com/pl/products/photoshop.html',
});

export const illustrator = createSkillFactory({
  name: 'Adobe Ilustrator',
  icon: 'simple-icons:adobeillustrator',
  iconColor: '#FF9A00',
  url: 'https://www.adobe.com/pl/products/illustrator.html',
});

export const it = createSkillFactory({
  name: 'IT',
  icon: 'game-icons:pc',
  iconColor: '#E696969',
  url: 'https://www.zs3.sanok.pl/zs3/o-szkole',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const css3 = createSkillFactory({
  name: 'CSS 3',
  icon: 'simple-icons:css3',
  iconColor: '#1572B6',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
});

export const cctv = createSkillFactory({
  name: 'CCTV',
  icon: 'bxs:cctv',
  iconColor: '#696969',
  url: 'https://global.uniview.com/',
});

export const gimp = createSkillFactory({
  name: 'GIMP',
  icon: 'simple-icons:gimp',
  iconColor: '#5C5543',
  url: 'https://www.gimp.org//',
});

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});
