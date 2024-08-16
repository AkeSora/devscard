import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Albin Safat',
  role: 'Młodszy Administrator Sieci / Wsparcia Technicznego',
  details: [
    { label: 'Telefon', value: '+48 536 159 042', url: 'tel:536159042' },
    { label: 'Email', value: 'albinsafat@proton.me', url: 'mailto:albinsafat@proton.me' },
    { label: 'Miejscowość', value: 'Rzeszów, Polska' },
    { label: 'Zakres płacy', value: '6 000 - 10 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Telefon', value: '536 159 042' },
    { label: 'Email', value: 'albinsafat@proton.me' },
    { label: 'LinkedIn', value: '/in/albin-safat', url: 'https://www.linkedin.com/in/albin-safat/' },
    { label: 'GitHub', value: '/albin-safat', url: 'https://github.com' },
    { label: 'Website', value: 'albin-safat-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    'Witaj, interesuje się sieciami komputerowymi i rzeczami z nimi powiązanymi. Począwszy od małych routerów domowych, aż do zastosowań Enterprise. Tematami z dziedziny informatyki interesuje się od początku swojego kontaktu z technologią. Mam doświadczenie w dziedzinie urządzeń sieciowych, komputerych i CCTV. Głównie zajmuje się markami TP-Link, Zyxel, D-Link, Ruijie/Reyee, Uniview. Moja wiedza pozwala dobranie urządzeń do odpowiedniej sytuacji i potrzeb klienta.',
  tags: [
    { name: 'Chętny do pomocy technicznej' },
    { name: 'Dostępny na współprace' },
    { name: 'Tester wielu marek CCTV' },
  ],
  action: {
    label: 'Pobierz CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Albin_Safat.pdf',
  },
  links: [facebook({ url: '#' }), linkedin({ url: 'https://www.linkedin.com/in/albin-safat/' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
