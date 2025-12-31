import { Course, Instructor, ScheduleItem } from './types';
import tangoImg from './assets/images/balli/tango.webp';
import liscioImg from './assets/images/balli/liscio.webp';
import standardImg from './assets/images/balli/standard.webp';
import latinoImg from './assets/images/balli/latino_americano.webp';
import gruppoImg from './assets/images/balli/balli_di_gruppo.webp';
import coreograficoImg from './assets/images/balli/coreografico.webp';
import donatellaImg from './assets/images/donatella2.webp';
import antonioImg from './assets/images/antonio.webp';

import ballo1 from './assets/images/gallery/ballo1.webp';
import ballo2 from './assets/images/gallery/ballo2.webp';
import ballo3 from './assets/images/gallery/ballo3.webp';
import ballo4 from './assets/images/gallery/ballo4.webp';
import ballo5 from './assets/images/gallery/ballo5.webp';
import ballo6 from './assets/images/gallery/ballo6.webp';
import ballo7 from './assets/images/gallery/ballo7.webp';
import ballo8 from './assets/images/gallery/ballo8.webp';

export const COURSES: Course[] = [
  {
    id: 'tango',
    title: 'Tango Argentino',
    description: 'Il tango è un ballo totalmente libero, privo di coreografie predefinite.',
    image: tangoImg
  },
  {
    id: 'liscio',
    title: 'Liscio',
    description: 'Il ballo liscio è un ballo di coppia nato in Romagna e diffuso in tutta Italia.',
    image: liscioImg
  },
  {
    id: 'standard',
    title: 'Standard',
    description: 'Le danze standard fanno parte delle danze internazionali e sono riconosciute anche per quanto riguarda le gare a livello agonistico.',
    image: standardImg
  },
  {
    id: 'latino',
    title: 'Latino Americano',
    description: 'Le danze latino-americane sono delle danze di coppia e di gruppo e fanno parte dei Balli latini nelle competizioni internazionali.',
    image: latinoImg
  },
  {
    id: 'gruppo',
    title: 'Balli di Gruppo',
    description: 'Il ballo di gruppo è una disciplina divertente e completa che permette di allenare in maniera efficace tutte le parti del corpo.',
    image: gruppoImg
  },
  {
    id: 'coreografico',
    title: 'Coreografico',
    description: 'Adatto a chi balla da almeno 5 anni. La lezione è strutturata in esercizi di tecnica di danze latino americane e studio di coreografie per competizioni e galleria teatrali',
    image: coreograficoImg
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: 'donatella',
    name: 'Donatella Lupia',
    role: 'Maestra di Ballo',
    bio: 'Pluridiplomata presso FIPD, FIDT e Accademia del Tango di Buenos Aires.',
    image: donatellaImg
  },
  {
    id: 'antonio',
    name: 'Antonio Lalli',
    role: 'Tango Argentino',
    bio: 'Maestro, ballerino e musicalizador (DJ) dal 1994.',
    image: antonioImg
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    day: 'Lunedì',
    courses: [
      { time: '17:30 - 18:30', courseName: 'Balli di Gruppo', level: 'Intermedi / Avanzati' },
      { time: '18:30 - 20:00', courseName: 'Coreografico', level: '' },
      { time: '20:30 - 21:30', courseName: 'Tango Argentino', level: 'Principianti' }
    ]
  },
  {
    day: 'Martedì',
    courses: [
      { time: '16:30 - 17:30', courseName: 'Balli di Gruppo', level: 'Principianti Assoluti' },
      { time: '17:30 - 18:30', courseName: 'Balli di Gruppo', level: 'Intermedi' },
      { time: '18:30 - 19:30', courseName: 'Balli di Gruppo', level: 'Intermedi II Livello' },
      { time: '19:30 - 21:00', courseName: 'Liscio, Standard e Latino Americano', level: 'Principianti' }
    ]
  },
  {
    day: 'Mercoledì',
    courses: [
      { time: '17:30 - 18:30', courseName: 'Balli di Gruppo', level: 'Intermedi / Avanzati' },
      { time: '18:30 - 20:00', courseName: 'Coreografico', level: '' },
      { time: '20:00 - 21:00', courseName: 'Balli di Gruppo', level: 'Intermedi' }
    ]
  },
  {
    day: 'Giovedì',
    courses: [
      { time: '16:30 - 17:30', courseName: 'Balli di Gruppo', level: 'Principianti Assoluti' },
      { time: '17:30 - 18:30', courseName: 'Balli di Gruppo', level: 'Principianti II livello' },
      { time: '18:30 - 20:00', courseName: 'Liscio, Standard, Latino Americano', level: 'Intermedi' },
      { time: '20:00 - 21:30', courseName: 'Tecnica danze latino americane', level: 'Tutti i livelli' }
    ]
  },
  {
    day: 'Venerdì',
    courses: [
      { time: '17:30 - 18:30', courseName: 'Balli di Gruppo', level: 'Intermedi / Avanzati' },
      { time: '18:30 - 20:00', courseName: 'Liscio, Standard, Latino Americano', level: 'Principianti' },
      { time: '20:00 - 21:00', courseName: 'Balli di Gruppo', level: 'Intermedi' }
    ]
  }
];

export const SCHOOL_INFO = {
  name: "Dana's Club",
  fullName: "Free Sport Life S.S.D.",
  address: "Via Giovanni Battista de Rossi 48, Roma",
  phone: "347 687 3085",
  email: "donatella.lupia@gmail.com",
  whatsapp: "https://wa.me/393476873085",
  mapsAddress: "https://maps.app.goo.gl/WHNuTkzVR86GMupg8",
  facebook: "https://facebook.com/danasclub",
  instagram: "https://instagram.com/danasclub_",
  mapsUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5937.737541485168!2d12.5152869!3d41.9169603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61649989d97d%3A0x6b60f25e791307b!2sVia%20Giovanni%20Battista%20de%20Rossi%2C%2048%2C%2000161%20Roma%20RM!5e0!3m2!1sit!2sit!4v1710000000000!5m2!1sit!2sit"
};

export const GALLERY_IMAGES = [
  ballo1,
  ballo2,
  ballo3,
  ballo4,
  ballo5,
  ballo6,
  ballo7,
  ballo8,
];