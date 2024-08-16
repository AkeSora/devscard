import type { Config } from '@/types/data';
import { pl } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: pl,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'now',
    },
  },
  meta: {
    title: 'Albin Safat CV - Młodszy Sieciowiec / Pomoc techniczna',
    description:
      'Witaj, interesuje się sieciami komputerowymi i rzeczami z nimi powiązanymi. Począwszy od małych routerów domowych, aż do zastosowań Enterprise. Tematami z dziedziny informatyki interesuje się od początku swojego istnienia. Mam doświadczenie w dziedzinie urządzeń sieciowych, komputerych i CCTV. Głównie zajmuje się markami TP-Link, Zyxel, D-Link, Ruijie/Reyee, Uniview. Moja wiedza pozwala dobranie urządzeń do odpowiedniej sytuacji i potrzeb klienta. ',
    faviconPath: '/src/assets/my-image.jpeg',
  },
  pdf: {
    footer: 'Zezwalam na przetwarzanie moich danych, jedynie w celach procesu rekrutacji.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
