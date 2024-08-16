import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  allegro,
  typescript,
  vue,
  gimp,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Doświadczcenie',
    slug: 'Doswiadczenie',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior front-end developer',
      company: 'Google',
      image: import('@/assets/logos/google-logo.jpg'),
      dates: [new Date('2020-02'), null],
      description: `
        - In tristique vulputate augue vel egestas.
        - Quisque ac imperdiet tortor, at lacinia ex.
        - Duis vel ex hendrerit, commodo odio sed, aliquam enim.
        - Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.
        - Nunc malesuada leo et est iaculis facilisis.
        - Fusce eu urna ut magna malesuada fringilla.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nextJs(), typescript(), nx(), firebase()],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'React.js developer',
      company: 'Facebook',
      image: import('@/assets/logos/facebook-logo.png'),
      dates: [new Date('2019-04'), new Date('2020-02')],
      description: `
        - Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.
        - Ut posuere massa lacus, eleifend molestie tortor auctor vel.
        - Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.
        - Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), reactQuery(), chakraUi(), eslint()],
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    {
      role: 'Obsługa Sklepu Internetowego',
      company: 'CSB',
      image: import('@/assets/logos/csb-logo1.png'),
      dates: [new Date('2021-08'), new Date('2021-11')],
      description: `
        Tworzenie i wrzucanie aukcji na Allegro.
        Tworzenie i wrzucanie zdjęć do aukcji na Allegro.
        Modyfikowanie grafik pod poszczególne produkty
      `,
      tagsList: {
        title: 'Technologies',
        tags: [allegro(), gimp(), pnpm()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
