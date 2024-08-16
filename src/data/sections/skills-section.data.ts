import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  astro,
  chakraUi,
  cypress,
  eslint,
  firebase,
  mongoDb,
  nestJs,
  pnpm,
  postgreSql,
  prettier,
  react,
  sass,
  supabase,
  tailwindCss,
  typescript,
  html5,
  gimp,
  cctv,
  css3,
  it,
  docker,
  photoshop,
  illustrator,
  portainer,
  homelab,
  network,
  kubernetes,
  allegro,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Umiejętności',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Posiadane',
      skills: [
        it({
          level: 5,
          description: 'Ukończony kierunek Technik Informatyk z wszystkimi egzaminami wraz z dodatkowymi szkoleniami.',
        }),

        html5({
          level: 2,
          description: 'Podstawowa konfiguracja i modyfikacja stron internetowych.',
        }),

        css3({
          level: 2,
          description: 'Podstawowe konfiguracja i modyfikacja stron internetowych',
        }),

        astro({
          level: 1,
          description: 'Wiedza pozwalająca na modyfikację gotowych projektów.',
        }),

        cctv({
          level: 5,
          description:
            'Konfiguracja i wiedza poparta doświadczeniem i certyfikatami od producetów: Uniview, BCS, Hikvision, Dahua.',
        }),

        gimp({
          level: 5,
          description: 'Obróbka graficzna zdjęć, kadrowanie i modyfikowanie kolorów, tworzenie miniaturek i banerów.',
        }),

        photoshop({
          level: 2,
          description: 'Obróbka graficzna zdjęć, kadrowanie i modyfikowanie kolorów, tworzenie miniaturek i banerów.',
        }),

        illustrator({
          level: 2,
          description: 'Obróbka graficzna zdjęć, kadrowanie i modyfikowanie kolorów, tworzenie miniaturek i banerów.',
        }),

        docker({
          level: 3,
          description:
            'Tworzenie i modyfikowanie dockerów, tworzenie serwerów i poszczególnych systemów: np. zaawansowany serwer Minecraft.',
        }),

        portainer({
          level: 2,
          description: 'Głównie wykorzystywany do zarządzania Dockerami.',
        }),

        homelab({
          level: 3,
          description:
            'Tematy związane z Homelab, czyli: Mini-PC, Serwery, Home Assistant, CasaOS/ZimaOS, OpentWRT, Programy OpenSource.',
        }),

        network({
          level: 4,
          description: 'Wiedza na temat portfolio produktów i ich konfiguacji urządzeń sieciowych.',
        }),
      ],
    },
    {
      title: 'Chciałbym się nauczyć/doszkolić:',
      skills: [tailwindCss(), astro(), docker(), kubernetes()],
    },
    {
      title: 'Języki',
      skills: [
        { icon: 'circle-flags:pl', name: 'Polski - natywnie' },
        { icon: 'circle-flags:us', name: 'Angielski - B1' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
