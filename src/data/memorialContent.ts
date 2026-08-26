/**
 * Curated content for the Dolly Parton Aotearoa memorial.
 *
 * Every fact here is sourced. Nothing is invented: figures come from RNZ,
 * the NZ Herald archive, or Wikipedia tour records, and each entry carries
 * its source URL. See the footer of the page for the full source list.
 */

export interface TimelineEntry {
  year: string;
  title: string;
  body: string;
}

export interface TributeCard {
  outlet: string;
  headline: string;
  quote: string | null;
  url: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  license: string;
  sourceUrl: string;
}

export type PressKind = 'article' | 'audio' | 'photo' | 'video';

export interface PressArticle {
  outlet: string;
  date: string;
  kind: PressKind;
  headline: string;
  quote: string;
  url: string;
}

export interface VisitSource {
  label: string;
  url: string;
}

export interface VisitImage {
  src: string;
  alt: string;
  credit: string;
  license: string;
  sourceUrl: string;
}

export interface Visit {
  year: string;
  title: string;
  date: string;
  venue: string;
  line: string;
  body: string[];
  sourceLabel: string;
  sourceUrl: string;
  extraSources?: readonly VisitSource[];
  image?: VisitImage;
}

export interface QuoteItem {
  quote: string;
  context: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

export interface RecordItem {
  fact: string;
  detail: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

export interface LessonItem {
  title: string;
  body: string;
  quote?: string;
  quoteSource?: string;
  sourceUrl?: string;
}

export interface OutfitLook {
  src: string;
  alt: string;
  era: string;
  caption: string;
  credit: string;
  license: string;
  sourceUrl: string;
}

export interface OutsideLink {
  label: string;
  url: string;
  blurb: string;
}

/**
 * Absolute public URL for a memorial image. Vercel serves the export at the
 * root, so images live at /images.
 *
 * @param fileName - Image file name inside public/images
 * @returns The public image URL
 */
export function getMemorialImageUrl(fileName: string): string {
  return `/images/${fileName}`;
}

export const heroCopy = {
  eyebrow: 'A memorial for Aotearoa',
  titlePre: 'Dolly in',
  titleEm: 'New Zealand.',
  subtitle: 'Three visits: 1979, 1987, 2014. The wind keeps her songs.',
  cta: 'Read her story',
  ctaHref: '#story',
} as const;

export const firstShowCopy = {
  eyebrow: 'Aotearoa, 11 July 1979',
  title: 'Her first New Zealand show.',
  body: [
    '"New Zealanders will get their first chance this week to say hello to Queen of Country, Dolly Parton, when the blonde bombshell gives a concert in Auckland." The Press, 9 July 1979.',
    '"Dolly Parton is still coming and will perform with her band on July 11 in the Auckland Town Hall," wrote Rip It Up in June 1979. She was 33; "Jolene" was five years old and "9 to 5" was a year away.',
    'She came back with Kenny Rogers in 1987, and it took until 2014 before she headlined her own show here again.',
  ],
  sources: [
    {
      label: 'The Press, 9 July 1979 — read it on Papers Past',
      url: 'https://paperspast.natlib.govt.nz/newspapers/CHP19790709.2.101.1',
    },
    {
      label: 'Rip It Up, June 1979 — read it on Papers Past',
      url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790601.2.8',
    },
  ],
  cta: 'The setlist from that night',
  ctaHref:
    'https://www.setlist.fm/setlist/dolly-parton/1979/auckland-town-hall-auckland-new-zealand-6bc70e36.html',
} as const;

export const marqueeSongs = [
  'Jolene',
  '9 to 5',
  'I Will Always Love You',
  'Coat of Many Colors',
  'Islands in the Stream',
  'Here You Come Again',
  'Dumb Blonde',
  'Blue Smoke',
] as const;

export const timelineEntries: readonly TimelineEntry[] = [
  {
    year: '1946',
    title: 'Born in Locust Ridge',
    body: 'The fourth of 12 children, born in a one-room cabin in the Smoky Mountains of Tennessee.',
  },
  {
    year: '1967',
    title: 'On the Porter Wagoner Show',
    body: 'At 21 she joined the syndicated country television show that carried her voice into millions of homes.',
  },
  {
    year: '1974',
    title: 'I Will Always Love You',
    body: 'Written as a plea to leave the show and go solo. She later turned down Elvis because his manager wanted half the publishing.',
  },
  {
    year: '1979',
    title: 'Hello, Dolly',
    body: '"New Zealanders will get their first chance this week to say hello to Queen of Country, Dolly Parton." The Press, 9 July 1979. She played the Auckland Town Hall on 11 July, her first concert in Aotearoa.',
  },
  {
    year: '1980',
    title: '9 to 5',
    body: 'The film and the title song, an anthem for women and workers that topped the charts.',
  },
  {
    year: '1986',
    title: 'Dollywood',
    body: 'She bought the ailing Silver Dollar City park in 1986, renamed it after herself, and turned it into Sevier County\u2019s largest employer \u2014 around 23,000 jobs at its peak.',
  },
  {
    year: '1987',
    title: 'Western Springs, with Kenny Rogers',
    body: 'Back with Kenny Rogers, Islands in the Stream still hot, she played Western Springs Stadium in Auckland on 1 March 1987, the visit she later told New Zealand Women\u2019s Weekly she loved the most.',
  },
  {
    year: '1992',
    title: 'The Bodyguard cover',
    body: 'Whitney Houston carried I Will Always Love You to the top of the world. Parton netted roughly $10 million in royalties.',
  },
  {
    year: '1995',
    title: 'The Imagination Library',
    body: 'She mailed the first books in 1995, one a month to every enrolled child in Sevier County, Tennessee. Three decades on, more than 300 million books have reached children around the world \u2014 and she called it her proudest accomplishment.',
  },
  {
    year: '2013',
    title: 'One Auckland show, then another',
    body: 'A single Vector Arena show announced in October. Ticket demand added a second night, 8 February, by December.',
  },
  {
    year: '2014',
    title: 'Blue Smoke in Aotearoa',
    body: 'The album went on sale in New Zealand first, and she played two nights at Vector Arena, Auckland, on 7 and 8 February, her third visit to Aotearoa after shows in 1979 and 1987.',
  },
  {
    year: '2019',
    title: 'MusiCares Person of the Year',
    body: 'Honoured by her peers for a lifetime of music and giving.',
  },
  {
    year: '2022',
    title: 'Rockstar, her last solo album',
    body: 'Her final studio album, released at 76, with Lizzo, Miley Cyrus, Paul McCartney and more.',
  },
  {
    year: '2023',
    title: 'Inspired by Dolly, in Wellington',
    body: 'The Glamaphones choir and the Hoot\u2019n\u2019Annies street brass band played her songs to a packed St Andrews on the Terrace on 13 May, the closest Wellington ever came to a Dolly show.',
  },
  {
    year: '2026',
    title: 'Nashville, 25 August',
    body: 'She died at home in Nashville, aged 80, after a career that spanned more than half a century and 3000 written songs.',
  },
];

export const aotearoaCopy = {
  eyebrow: 'Dolly in Aotearoa',
  title: 'Two nights in Aotearoa.',
  body: [
    '7 and 8 February 2014, Vector Arena, Auckland. The Blue Smoke tour touched down in Aotearoa twice, and the album went on sale here on 31 January, months ahead of the United States.',
    'She had played here before: the Town Hall, Auckland in 1979, and Western Springs Stadium with Kenny Rogers in 1987. Auckland got her. The rest of Aotearoa kept the songs.',
    'Three years before she died, Wellington finally sang for her. On 13 May 2023 the Glamaphones choir and the Hoot\u2019n\u2019Annies street brass band performed \u201CInspired by Dolly\u201D at St Andrews on the Terrace, a full night of her songs.',
  ],
} as const;

export const tributeCards: readonly TributeCard[] = [
  {
    outlet: 'RNZ',
    headline: 'Queen of country and humanitarian hero, dead at 80',
    quote:
      'In a career that spanned over half a century, Parton captured the American experience, penning more than 3000 songs.',
    url: 'https://www.rnz.co.nz/life/people/celebrity/country-music-star-dolly-parton-has-died-aged-80',
  },
  {
    outlet: 'RNZ',
    headline: 'A world less sparkly: tributes pour in',
    quote: 'The world feels a lot less sparkly all of a sudden.',
    url: 'https://www.rnz.co.nz/life/people/celebrity/a-world-less-sparkly-tributes-pour-in-after-death-of-dolly-parton',
  },
  {
    outlet: 'NZ Herald',
    headline: 'Dolly on Rockstar, with Lizzo, Miley and McCartney',
    quote:
      'A New Zealand interview with Dolly about her final solo album, republished the day she died.',
    url: 'https://www.nzherald.co.nz/entertainment/dolly-parton-on-her-final-solo-album-rockstar-working-with-lizzo-miley-mccartney-and-more/premium/3JNZOMJEIZHCTDMXAIY4DB5QNA/',
  },
  {
    outlet: '1News',
    headline: 'Music legend Dolly Parton dies at 80',
    quote:
      'The country music icon whose soaring vibrato vocals, poignant songwriting and sparkling costumes defined her rise from a log cabin in the Tennessee mountains to the height of stardom and acclaim, has died. She was 80.',
    url: 'https://www.1news.co.nz/2026/08/26/music-legend-dolly-parton-dies-at-80/',
  },
  {
    outlet: 'RNZ',
    headline: "This dumb blonde ain't nobody's fool",
    quote:
      'Behind a glass display case at a resort in Pigeon Forge, Tennessee, is a locked box. Inside it sits a recording of an unreleased Dolly Parton song.',
    url: 'https://www.rnz.co.nz/life/people/celebrity/dolly-parton-s-legacy-proves-once-and-for-all-this-dumb-blonde-ain-t-nobody-s-fool',
  },
  {
    outlet: 'RNZ',
    headline: 'Saying no to Elvis and other moments that shaped her life',
    quote:
      'Parton met her husband at 18, on her first day in Nashville. He was interested in her, and not what she looked like.',
    url: 'https://www.rnz.co.nz/life/music/saying-no-to-elvis-and-other-moments-that-shaped-dolly-parton-s-life',
  },
];

export const pressArticles: readonly PressArticle[] = [
  {
    outlet: 'Rip It Up',
    date: '1 Oct 1977',
    kind: 'article',
    headline: 'A Living Dolly: if you will Parton the expression',
    quote:
      'When Dolly Parton says "I don\u2019t want to leave the country but to take the country with me," she speaks with the self assurance of her most sentimental lyrics.',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19771001.2.32',
  },
  {
    outlet: 'Rip It Up',
    date: '1 Aug 1979',
    kind: 'article',
    headline: 'Good Golly Ms Dolly',
    quote:
      'The biggest shock is just how anyone can look so damned pretty in that lime green cat suit with its surprisingly demure, but heavily sequinned, neckline.',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790801.2.16',
  },
  {
    outlet: 'The Press',
    date: '21 Jan 1981',
    kind: 'article',
    headline: 'The little girl with the big voice',
    quote:
      'She is a modern-day Mae West. Miss Parton writes all her own material and has a rapport with an audience which is quite unusual.',
    url: 'https://paperspast.natlib.govt.nz/newspapers/CHP19810121.2.102.3',
  },
  {
    outlet: 'The Press',
    date: '13 Aug 1984',
    kind: 'article',
    headline: 'Dolly Parton stars in outrageous comedy',
    quote:
      '\u201CThey certainly don\u2019t play me as some dumb blonde,\u201D Dolly Parton said while making the film. \u201CDoralee is an intelligent, caring person.\u201D',
    url: 'https://paperspast.natlib.govt.nz/newspapers/CHP19840813.2.81.4',
  },
  {
    outlet: 'NZ Herald',
    date: '30 Oct 2013',
    kind: 'article',
    headline: "Tour news: Dolly Parton plans NZ 'homecoming' show",
    quote: "It's been a long time between drinks for Dolly Parton's Kiwi fans.",
    url: 'https://www.nzherald.co.nz/entertainment/tour-news-dolly-parton-plans-nz-homecoming-show/XXBIXQN4HOTTEX6V4PDB4LY5KU/',
  },
  {
    outlet: 'NZ Herald',
    date: '7 Feb 2014',
    kind: 'article',
    headline: 'Review: Dolly Parton at Vector Arena',
    quote:
      'Dolly Parton was a master storyteller as well as musician. Her voice seemed as strong as ever at 68.',
    url: 'https://www.nzherald.co.nz/entertainment/review-dolly-parton-at-vector-arena/2YU7PCBZDG73EENKADT5BYCHWM/',
  },
  {
    outlet: 'The Coast',
    date: '20 Nov 2023',
    kind: 'article',
    headline: 'Dolly Parton once dreamed of moving to New Zealand',
    quote: 'She told NZ Women\'s Weekly: "I love New Zealand. I\'ve been there many times."',
    url: 'https://www.thecoast.net.nz/news/dolly-parton-once-dreamed-of-moving-to-new-zealand-but-it-s-too-far-away/',
  },
  {
    outlet: '1News',
    date: '26 Aug 2026',
    kind: 'article',
    headline: "Singer Dolly Parton 'loved everything about' New Zealand",
    quote:
      '"To all my friends and fans in New Zealand, here\'s to you. Now, you\'re a long way off, but you feel real close."',
    url: 'https://www.1news.co.nz/2026/08/26/singer-dolly-parton-loved-everything-about-new-zealand/',
  },
];

export const booksCopy = {
  title: 'Three hundred million books.',
  body: [
    'Her Imagination Library mails one free book a month to enrolled children until they start school. More than 300 million books so far.',
    'Aotearoa has its own National Library. She would have loved that.',
  ],
  cta: 'Read about the Imagination Library',
  ctaHref: 'https://imaginationlibrary.com/',
} as const;

export interface MusicSong {
  title: string;
  artist: string;
  audioUrl: string;
  sourceUrl: string;
}

export const musicSongs: readonly MusicSong[] = [
  {
    title: 'Jolene',
    artist: 'Sunny & the Whisky Machine',
    audioUrl:
      'https://archive.org/download/kdur_dollyparton_covers_night2023-02-11/kdur_dollyparton2023-02-11t-55.mp3',
    sourceUrl: 'https://archive.org/details/kdur_dollyparton_covers_night2023-02-11',
  },
  {
    title: '9 to 5',
    artist: 'Backyard Barbies',
    audioUrl:
      'https://archive.org/download/kdur_dollyparton_covers_night2023-02-11/kdur_dollyparton2023-02-11t-29.mp3',
    sourceUrl: 'https://archive.org/details/kdur_dollyparton_covers_night2023-02-11',
  },
  {
    title: 'I Will Always Love You',
    artist: 'The Badly Bent',
    audioUrl:
      'https://archive.org/download/kdur_dollyparton_covers_night2023-02-11/kdur_dollyparton2023-02-11t-16.mp3',
    sourceUrl: 'https://archive.org/details/kdur_dollyparton_covers_night2023-02-11',
  },
  {
    title: 'Islands in the Stream',
    artist: 'Double D Wranglers',
    audioUrl:
      'https://archive.org/download/kdur_dollyparton_covers_night2023-02-11/kdur_dollyparton2023-02-11t-32.mp3',
    sourceUrl: 'https://archive.org/details/kdur_dollyparton_covers_night2023-02-11',
  },
  {
    title: 'Coat of Many Colors',
    artist: 'Dead River Band',
    audioUrl:
      'https://archive.org/download/kdur_dollyparton_covers_night2023-02-11/kdur_dollyparton2023-02-11t-25.mp3',
    sourceUrl: 'https://archive.org/details/kdur_dollyparton_covers_night2023-02-11',
  },
  {
    title: 'Here You Come Again',
    artist: 'Hotel Draw',
    audioUrl:
      'https://archive.org/download/kdur_dollyparton_covers_night2023-02-11/kdur_dollyparton2023-02-11t-23.mp3',
    sourceUrl: 'https://archive.org/details/kdur_dollyparton_covers_night2023-02-11',
  },
  {
    title: 'Blue Smoke',
    artist: 'The Reverse Cowboys (aka Carute Roma)',
    audioUrl:
      'https://archive.org/download/kdur_dollyparton_covers_night2023-02-11/kdur_dollyparton2023-02-11t-35.mp3',
    sourceUrl: 'https://archive.org/details/kdur_dollyparton_covers_night2023-02-11',
  },
];

export const galleryImages: readonly GalleryImage[] = [
  {
    src: getMemorialImageUrl('dolly-1970.jpg'),
    alt: 'Dolly Parton in the classic bouffant look',
    caption: 'RCA press photo, 1970',
    credit: 'RCA Records',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_-_RCA_Press_Photo_(1970).jpg',
  },
  {
    src: getMemorialImageUrl('dolly-1984-hawaii.jpg'),
    alt: 'Dolly Parton at the Kahala Hilton in Hawaii in 1984',
    caption: 'Kahala Hilton, Hawaii, 1984',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_(210610108).jpg',
  },
  {
    src: getMemorialImageUrl('kennedy-2006.jpg'),
    alt: 'Dolly Parton at the Kennedy Center Honors in 2006',
    caption: 'Kennedy Center Honors, 2006',
    credit: 'White House photo by Eric Draper',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2006_Kennedy_Center_honorees_(cropped).jpg',
  },
  {
    src: getMemorialImageUrl('liseberg-2010.jpg'),
    alt: 'Dolly Parton accepting the Liseberg Applause Award in 2010',
    caption: 'Accepting the Liseberg Applause Award, 2010',
    credit: 'Curtis Hilbun',
    license: 'CC BY 3.0',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Dolly_Parton_accepting_Liseberg_Applause_Award_2010_portrait.jpg',
  },
  {
    src: getMemorialImageUrl('dolly-wolftrap-2011.jpg'),
    alt: 'Dolly Parton on stage at Wolf Trap in 2011',
    caption: 'On stage at Wolf Trap, 2011',
    credit: 'Leeann Cafferata',
    license: 'CC BY 2.0',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Dolly_Parton_at_Wolf_Trap,_2011_IMG_6250_(5997834442).jpg',
  },
  {
    src: getMemorialImageUrl('dolly-2014-knoxville.jpg'),
    alt: 'Dolly Parton on stage during the Blue Smoke tour in 2014',
    caption: 'Blue Smoke tour, 2014',
    credit: 'Kristopher Harris',
    license: 'CC BY 2.0',
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Dolly_Parton_at_'Blue_Smoke_World_Tour'_in_Knoxville.jpg",
  },
  {
    src: getMemorialImageUrl('dolly-2023.jpg'),
    alt: 'Dolly Parton in 2023',
    caption: 'Dolly Parton, 2023',
    credit: 'KIND MUSIC GROUP',
    license: 'CC BY 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_2023.jpg',
  },
];

export const storyCopy = {
  eyebrow: 'Three visits in 35 years',
  title: 'First, again, and last.',
  intro: [
    'Aotearoa got her three times in the end: a solo Town Hall night in 1979, Western Springs with Kenny Rogers in 1987, and two Vector Arena nights in 2014. The rest of the country kept the songs.',
    'It was a cold, cloudy Auckland winter night, and the Town Hall was full of people about to meet her for the first time. Dolly Parton was 33, five years past "Jolene", one year short of "9 to 5", and a long way from the one-room cabin she was born in.',
    'She brought an eight piece band, the new album Great Balls of Fire, and a lime green sequinned catsuit that Rip It Up would not stop talking about. The papers had been telling Auckland she was coming for weeks.',
  ],
} as const;

export const visits: readonly Visit[] = [
  {
    year: '1979',
    title: 'First: the Town Hall',
    date: '11 July 1979',
    venue: 'Auckland Town Hall',
    line: 'A solo winter night, with an eight piece band.',
    body: [
      '"Dolly Parton is still coming and will perform with her band on July 11 in the Auckland Town Hall," Rip It Up told its readers in June, adding that the tour coincided with the new album Great Balls of Fire.',
      'Rip It Up reviewed the visit and interviewed her in her lime green catsuit. "The biggest shock is just how anyone can look so damned pretty in that," the magazine wrote.',
    ],
    sourceLabel: 'Setlist.fm: Dolly Parton, Auckland Town Hall 1979',
    sourceUrl:
      'https://www.setlist.fm/setlist/dolly-parton/1979/auckland-town-hall-auckland-new-zealand-6bc70e36.html',
    extraSources: [
      {
        label: 'Rip It Up, June 1979 — read it on Papers Past',
        url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790601.2.8',
      },
      {
        label: '"Good Golly Ms Dolly", August 1979 — Papers Past',
        url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790801.2.16',
      },
    ],
    image: {
      src: getMemorialImageUrl('dolly-1970.jpg'),
      alt: 'Dolly Parton in a vintage portrait from the era of her first Auckland show',
      credit: 'RCA Records',
      license: 'Public domain',
      sourceUrl:
        'https://commons.wikimedia.org/wiki/File:Dolly_Parton_-_RCA_Press_Photo_(1970).jpg',
    },
  },
  {
    year: '1987',
    title: 'Again: with Kenny',
    date: '1 March 1987',
    venue: 'Western Springs Stadium, Auckland',
    line: 'Islands in the Stream, live in the open air.',
    body: [
      'She came back with Kenny Rogers on the Islands in the Stream tour. "We loved the people, we loved the food... we just loved everything about it," she told New Zealand Women\u2019s Weekly in 2023. "It\u2019s 20 hours to get there! We couldn\u2019t just say, oh, we\u2019re going to New Zealand for the weekend."',
    ],
    sourceLabel: 'ODT (RNZ): Dolly wanted a slice of home in NZ',
    sourceUrl: 'https://www.odt.co.nz/news/national/dolly-wanted-a-slice-of-home-in-nz-kbo67st0',
    extraSources: [
      {
        label: '"Dolly Parton charmed them all", Rip It Up, July 1987 — Papers Past',
        url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19870701.2.14.14',
      },
    ],
    image: {
      src: getMemorialImageUrl('dolly-rhinestone-1984.jpg'),
      alt: 'Dolly Parton in rhinestones, photographed in the 1980s',
      credit: 'Mel Melcon, Los Angeles Times',
      license: 'CC BY 4.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_and_Sylvester_Stallone.jpg',
    },
  },
  {
    year: '2014',
    title: 'Last: two nights',
    date: '7 and 8 February 2014',
    venue: 'Vector Arena, Auckland',
    line: 'One show announced, a second added for demand.',
    body: [
      'A single Vector Arena show was announced in October 2013. Ticket demand added a second night, 8 February, by December. The Blue Smoke album went on sale in New Zealand first and reached number one here. "My life has been like a paid vacation," she told the crowds, "even when I\u2019m comin\u2019 over there."',
    ],
    sourceLabel: 'NZ Herald: Dolly Parton to play second NZ show',
    sourceUrl:
      'https://www.nzherald.co.nz/entertainment/tour-news-dolly-parton-to-play-second-nz-show/VCEFUMLJQJOKUMWTEI6YOV7DHM/',
    extraSources: [
      {
        label: 'NZ Herald: Review, Dolly Parton at Vector Arena (2014)',
        url: 'https://www.nzherald.co.nz/entertainment/review-dolly-parton-at-vector-arena/2YU7PCBZDG73EENKADT5BYCHWM/',
      },
    ],
    image: {
      src: getMemorialImageUrl('dolly-2014-knoxville.jpg'),
      alt: 'Dolly Parton performing in a sparkling outfit on the Blue Smoke tour, 2014',
      credit: 'Kristopher Harris',
      license: 'CC BY 2.0',
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Dolly_Parton_at_'Blue_Smoke_World_Tour'_in_Knoxville.jpg",
    },
  },
];

export const funnyQuotes: readonly QuoteItem[] = [
  {
    quote: 'It costs a lot of money to look this cheap.',
    context: 'Her answer, every time, about the rhinestones.',
  },
  {
    quote:
      'I look just like the girl next door, if you happen to live next door to an amusement park.',
    context: 'On the wig, the heels and the rest of it.',
  },
  {
    quote:
      'People started telling me I should change my look. And I thought, that means they\u2019re noticing the way I look. So I decided to change it all right, by exaggerating it.',
    context: 'On the teased hair, to Rip It Up in Auckland.',
    sourceLabel: 'Rip It Up, August 1979',
    sourceUrl: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790801.2.16',
  },
  {
    quote:
      'I wish people wouldn\u2019t dwell on this "New Dolly Parton", \u2019cos I am Dolly Parton. I\u2019ll always be a country person and whatever I do expands on that.',
    context: 'To Rip It Up, in her New Zealand visit year.',
    sourceLabel: 'Rip It Up, August 1979',
    sourceUrl: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790801.2.16',
  },
  {
    quote: 'My life has been like a paid vacation.',
    context: 'To the Auckland crowds, 2014.',
    sourceLabel: 'RNZ, 2026',
    sourceUrl: 'https://www.odt.co.nz/news/national/dolly-wanted-a-slice-of-home-in-nz-kbo67st0',
  },
  {
    quote:
      'I\u2019ve always been a happy sort of person. I was born with a happy nature and a happy heart.',
    context: 'Telling The Press why the welcome would be returned.',
    sourceLabel: 'The Press, 9 July 1979',
    sourceUrl: 'https://paperspast.natlib.govt.nz/newspapers/CHP19790709.2.101.1',
  },
];

export const recordItems: readonly RecordItem[] = [
  {
    fact: 'Seven decades on the US country charts',
    detail:
      'The most decades on the Hot Country Songs chart by a female artist, verified by Guinness World Records in 2021.',
    sourceLabel: 'Today, December 2021',
    sourceUrl:
      'https://www.today.com/popculture/dolly-parton-breaks-3-guinness-world-records-see-list-t243473',
  },
  {
    fact: 'Most No. 1 country hits by a woman',
    detail: '25 of her singles reached No. 1 on the US Hot Country Songs chart.',
    sourceLabel: 'TODAY, December 2021',
    sourceUrl:
      'https://www.today.com/popculture/dolly-parton-breaks-3-guinness-world-records-see-list-t243473',
  },
  {
    fact: 'Most hits on the Hot Country Songs chart',
    detail:
      '109 charted country singles, a record she set in 2021 with Reba McEntire on "Does He Love You".',
    sourceLabel: 'TODAY, December 2021',
    sourceUrl:
      'https://www.today.com/popculture/dolly-parton-breaks-3-guinness-world-records-see-list-t243473',
  },
  {
    fact: '42 Top 10 country albums',
    detail: 'The most career Top 10 country albums of any artist, male or female.',
    sourceLabel: 'Wikipedia, Dolly Parton',
    sourceUrl: 'https://en.wikipedia.org/wiki/Dolly_Parton',
  },
  {
    fact: 'More than 3,000 songs',
    detail:
      'She told CNN in 2009 she had written at least 3,000 songs, writing seriously since the age of seven.',
    sourceLabel: 'Wikipedia, Dolly Parton',
    sourceUrl: 'https://en.wikipedia.org/wiki/Dolly_Parton',
  },
  {
    fact: '300 million books gifted',
    detail:
      'The Imagination Library passed the 300 million book mark in 2025, one free book a month to each enrolled child.',
    sourceLabel: 'Imagination Library, year in review',
    sourceUrl: 'https://imaginationlibrary.com/news-resources/year-in-review/',
  },
];

export const triviaItems: readonly RecordItem[] = [
  {
    fact: 'Top 10 country hits in six straight decades',
    detail:
      'From 1967 to 2020 she placed a song in the country top 10 in every decade, 1960s through 2010s. Guinness World Records verified her six decades of top 20 country hits in 2018.',
    sourceLabel: 'TODAY, December 2021',
    sourceUrl:
      'https://www.today.com/popculture/dolly-parton-breaks-3-guinness-world-records-see-list-t243473',
  },
  {
    fact: '"9 to 5" came from her nails',
    detail:
      'She wrote the melody by tapping her long acrylic nails on a studio desk. The nails she kept, the song became an anthem.',
    sourceLabel: 'RNZ, 2026',
    sourceUrl:
      'https://www.rnz.co.nz/life/people/celebrity/country-music-star-dolly-parton-has-died-aged-80',
  },
  {
    fact: '"Jolene" was a bank teller',
    detail:
      'She told NPR she wrote it after a red-haired teller paid her husband Carl a little too much attention.',
    sourceLabel: 'RNZ, 2026',
    sourceUrl:
      'https://www.rnz.co.nz/life/people/celebrity/country-music-star-dolly-parton-has-died-aged-80',
  },
  {
    fact: 'She said no to Elvis',
    detail:
      'She kept the publishing of "I Will Always Love You" and turned down Elvis when his manager wanted half of it. The song paid for the rest of her life.',
    sourceLabel: 'RNZ, 2026',
    sourceUrl:
      'https://www.rnz.co.nz/life/people/celebrity/country-music-star-dolly-parton-has-died-aged-80',
  },
  {
    fact: 'She turned down the Medal of Freedom three times',
    detail:
      'Twice while Carl was ill, and once more in 2025 to keep out of politics. The medals she never needed.',
    sourceLabel: 'TODAY, 2021',
    sourceUrl:
      'https://www.today.com/popculture/dolly-parton-turned-down-presidential-medal-freedom-twice-t207752',
  },
  {
    fact: 'A lichen is named after her',
    detail:
      'In 2015, scientists named a newly discovered Appalachian lichen Japewiella dollypartoniana in her honour.',
    sourceLabel: 'Wikipedia, Dolly Parton',
    sourceUrl: 'https://en.wikipedia.org/wiki/Dolly_Parton',
  },
  {
    fact: 'Dollywood feeds a county',
    detail:
      'She bought the theme park in 1986, renamed it, and it became Sevier County\u2019s largest employer with around 23,000 jobs.',
    sourceLabel: 'RNZ, 2026',
    sourceUrl:
      'https://www.rnz.co.nz/life/people/celebrity/country-music-star-dolly-parton-has-died-aged-80',
  },
  {
    fact: '59 years of private marriage',
    detail:
      'She and Carl Dean stayed married for 59 years, and he barely appeared in public with her. He died in March 2025.',
    sourceLabel: 'RNZ, 2026',
    sourceUrl:
      'https://www.rnz.co.nz/life/people/celebrity/country-music-star-dolly-parton-has-died-aged-80',
  },
  {
    fact: 'Godmother to Miley',
    detail: 'She was godmother to Miley Cyrus, who called her "the purest soul" the day she died.',
    sourceLabel: '1News, 2026',
    sourceUrl:
      'https://www.1news.co.nz/2026/08/26/singer-dolly-parton-loved-everything-about-new-zealand/',
  },
];

export const lessonItems: readonly LessonItem[] = [
  {
    title: 'Own what you make',
    body: 'She kept the publishing to "I Will Always Love You" when Elvis wanted half of it. The song paid her for decades after.',
    quote: 'I call it the little gift that keeps giving.',
    quoteSource: 'RNZ, 2020',
    sourceUrl: 'https://www.odt.co.nz/news/national/dolly-wanted-a-slice-of-home-in-nz-kbo67st0',
  },
  {
    title: 'Make the quirk work',
    body: 'People told her the teased hair was out of style. She decided the notice meant she should exaggerate it, and the look became the brand.',
    quote: 'I decided to change it all right, by exaggerating it.',
    quoteSource: 'Rip It Up, 1979',
    sourceUrl: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790801.2.16',
  },
  {
    title: 'Give quietly, give hugely',
    body: '300 million books, a million dollars of seed money for the COVID vaccine, and US$1000 a month to families who lost homes to the Tennessee wildfires.',
    quote: 'I felt so proud to have been part of that little seed money.',
    quoteSource: 'RNZ, 2026',
    sourceUrl:
      'https://www.rnz.co.nz/life/people/celebrity/country-music-star-dolly-parton-has-died-aged-80',
  },
  {
    title: 'Work like it is a holiday',
    body: 'She toured, recorded, wrote and promoted to the end. The work was the reward.',
    quote: 'My life has been like a paid vacation.',
    quoteSource: 'Auckland, 2014',
    sourceUrl: 'https://www.odt.co.nz/news/national/dolly-wanted-a-slice-of-home-in-nz-kbo67st0',
  },
  {
    title: 'Stay who you are',
    body: 'Country music was the home she never left, no matter how pop the charts got.',
    quote: 'I\u2019ll always be a country person and whatever I do expands on that.',
    quoteSource: 'Rip It Up, 1979',
    sourceUrl: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790801.2.16',
  },
  {
    title: 'Dream more, learn more, care more',
    body: 'Her own prescription for a life. She turned it into a song, and then into a library.',
    quote: 'Find out who you are and do it on purpose.',
    quoteSource: 'Her favourite advice',
    sourceUrl: 'https://en.wikipedia.org/wiki/Dolly_Parton',
  },
];

export const outfitLooks: readonly OutfitLook[] = [
  {
    src: getMemorialImageUrl('dolly-1959.jpg'),
    alt: 'Dolly Parton at age 12 in a 1959 publicity photograph',
    era: '1959',
    caption: 'Age 12: her first publicity photo',
    credit: 'Goldband Records',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_at_age_12_(1959).jpg',
  },
  {
    src: getMemorialImageUrl('dolly-1970.jpg'),
    alt: 'Dolly Parton in a 1970 RCA Records press photograph',
    era: '1970',
    caption: 'The bouffant years: RCA press photo',
    credit: 'RCA Records',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_-_RCA_Press_Photo_(1970).jpg',
  },
  {
    src: getMemorialImageUrl('dolly-1984-hawaii.jpg'),
    alt: 'Dolly Parton in April 1984 at the Kahala Hilton in Hawaii',
    era: '1984',
    caption: 'Kahala Hilton, Hawaii, April 1984',
    credit: 'Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_(210610108).jpg',
  },
  {
    src: getMemorialImageUrl('dolly-rhinestone-1984.jpg'),
    alt: 'Dolly Parton arriving at the Rhinestone premiere with Sylvester Stallone',
    era: '1984',
    caption: 'Rhinestone premiere, with Stallone',
    credit: 'Mel Melcon, Los Angeles Times',
    license: 'CC BY 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_and_Sylvester_Stallone.jpg',
  },
  {
    src: getMemorialImageUrl('dolly-wolftrap-2011.jpg'),
    alt: 'Dolly Parton performing on stage at Wolf Trap in 2011',
    era: '2011',
    caption: 'On stage at Wolf Trap, Virginia',
    credit: 'Leeann Cafferata',
    license: 'CC BY 2.0',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Dolly_Parton_at_Wolf_Trap,_2011_IMG_6250_(5997834442).jpg',
  },
  {
    src: getMemorialImageUrl('dolly-2014-knoxville.jpg'),
    alt: 'Dolly Parton performing in a sparkling outfit on the Blue Smoke tour in Knoxville',
    era: '2014',
    caption: 'Blue Smoke tour, Knoxville, May 2014',
    credit: 'Kristopher Harris',
    license: 'CC BY 2.0',
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Dolly_Parton_at_'Blue_Smoke_World_Tour'_in_Knoxville.jpg",
  },
  {
    src: getMemorialImageUrl('dolly-2022-peabody.jpg'),
    alt: 'Dolly Parton at the Peabody Awards in 2022',
    era: '2022',
    caption: 'Peabody Awards, 2022',
    credit: 'Peabody Awards',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_in_2022.jpg',
  },
];

export const outsideLinks: readonly OutsideLink[] = [
  {
    label: 'Dolly Parton',
    url: 'https://dollyparton.com/',
    blurb: 'The official site: songs, news and her own telling of the story.',
  },
  {
    label: 'Imagination Library',
    url: 'https://imaginationlibrary.com/',
    blurb: 'One free book a month for every enrolled child until school.',
  },
  {
    label: 'The Dollywood Foundation',
    url: 'https://dollywoodfoundation.org/',
    blurb: 'The charity behind the library, the Buddy Program and disaster relief.',
  },
  {
    label: 'Dollywood',
    url: 'https://www.dollywood.com/',
    blurb: 'The theme park she bought in 1986 and renamed for herself.',
  },
];

export const sourceLinks = [
  {
    label: 'The Press (Papers Past): "Hello, Dolly", 9 July 1979',
    url: 'https://paperspast.natlib.govt.nz/newspapers/CHP19790709.2.101.1',
  },
  {
    label: 'Rip It Up (Papers Past): "Tours" — 11 July, Auckland Town Hall, June 1979',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790601.2.8',
  },
  {
    label: 'Rip It Up (Papers Past): "Tours" — Great Balls of Fire, July 1979',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790701.2.9',
  },
  {
    label: 'Rip It Up (Papers Past): "Good Golly Ms Dolly" interview, August 1979',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790801.2.16',
  },
  {
    label: 'Rip It Up (Papers Past): "A Living Dolly" album review, October 1977',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19771001.2.32',
  },
  {
    label: 'Broadsheet (Papers Past): 9 to 5 film feature, May 1981',
    url: 'https://paperspast.natlib.govt.nz/periodicals/BROADS19810501.2.23.3',
  },
  {
    label: 'The Press (Papers Past): "The little girl with the big voice", 21 January 1981',
    url: 'https://paperspast.natlib.govt.nz/newspapers/CHP19810121.2.102.3',
  },
  {
    label: 'The Press (Papers Past): "Dolly Parton stars in outrageous comedy", 13 August 1984',
    url: 'https://paperspast.natlib.govt.nz/newspapers/CHP19840813.2.81.4',
  },
  {
    label: 'Rip It Up (Papers Past): "Dolly Parton charmed them all", July 1987',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19870701.2.14.14',
  },
  {
    label: 'Setlist.fm: Dolly Parton, Auckland Town Hall 1979',
    url: 'https://www.setlist.fm/setlist/dolly-parton/1979/auckland-town-hall-auckland-new-zealand-6bc70e36.html',
  },
  {
    label: 'Setlist.fm: Kenny Rogers and Dolly Parton, 1987',
    url: 'https://www.setlist.fm/setlist/kenny-rogers-and-dolly-parton/1987/western-springs-stadium-auckland-new-zealand-73c70e9d.html',
  },
  {
    label: 'Setlist.fm: Dolly Parton, Vector Arena 2014',
    url: 'https://www.setlist.fm/setlist/dolly-parton/2014/vector-arena-auckland-new-zealand-3c51df7.html',
  },
  {
    label: 'Eventfinda News: Dolly Parton Auckland Concert Announced (2013)',
    url: 'https://www.eventfinda.co.nz/news/2013/10/dolly-parton-announces-auckland-concert',
  },
  {
    label: "NZ Herald: Tour news, Dolly Parton plans NZ 'homecoming' show (2013)",
    url: 'https://www.nzherald.co.nz/entertainment/tour-news-dolly-parton-plans-nz-homecoming-show/XXBIXQN4HOTTEX6V4PDB4LY5KU/',
  },
  {
    label: 'NZ Herald: Dolly Parton to play second NZ show (2013)',
    url: 'https://www.nzherald.co.nz/entertainment/tour-news-dolly-parton-to-play-second-nz-show/VCEFUMLJQJOKUMWTEI6YOV7DHM/',
  },
  {
    label: 'RNZ Nine to Noon: artist of the week, Dolly Parton (audio, 2014)',
    url: 'https://www.rnz.co.nz/national/programmes/ninetonoon/audio/2584681/music-with-marty-duda',
  },
  {
    label: 'NZ Herald: Review, Dolly Parton at Vector Arena (2014)',
    url: 'https://www.nzherald.co.nz/entertainment/review-dolly-parton-at-vector-arena/2YU7PCBZDG73EENKADT5BYCHWM/',
  },
  {
    label: 'Stuff: Dolly Parton dazzles Vector (2014)',
    url: 'https://www.stuff.co.nz/entertainment/music/gig-reviews/9700133/Dolly-Parton-dazzles-Vector',
  },
  {
    label: 'Getty Images: Dolly Parton at Vector Arena (photos, 2014)',
    url: 'https://www.gettyimages.com/detail/news-photo/dolly-parton-performs-live-for-fans-at-vector-arena-on-news-photo/467487951',
  },
  {
    label: 'The Coast: Dolly Parton once dreamed of moving to New Zealand (2023)',
    url: 'https://www.thecoast.net.nz/news/dolly-parton-once-dreamed-of-moving-to-new-zealand-but-it-s-too-far-away/',
  },
  {
    label: "1News: Singer Dolly Parton 'loved everything about' New Zealand (2026)",
    url: 'https://www.1news.co.nz/2026/08/26/singer-dolly-parton-loved-everything-about-new-zealand/',
  },
  {
    label: 'ODT (RNZ): Dolly wanted a slice of home in NZ (2026)',
    url: 'https://www.odt.co.nz/news/national/dolly-wanted-a-slice-of-home-in-nz-kbo67st0',
  },
  {
    label: 'NZ Herald: US country music legend Dolly Parton dies at 80 (2026)',
    url: 'https://www.nzherald.co.nz/entertainment/us-country-music-legend-dolly-parton-dies-at-80/PITPEVSBYOBJOVR757XVQSESV4/',
  },
  {
    label: 'Kiwi Concert Date Archive: Dolly Parton, Town Hall, Auckland 1979',
    url: 'https://kiwiconcertdatearchive.blogspot.com/2011/04/dolly-parton.html',
  },
  {
    label: 'Kiwi Concert Date Archive: Kenny Rogers and Dolly Parton, 1987',
    url: 'https://kiwiconcertdatearchive.blogspot.com/2011/08/kenny-rogers-dolly-parton.html',
  },
  {
    label: 'RNZ obituary',
    url: 'https://www.rnz.co.nz/life/people/celebrity/country-music-star-dolly-parton-has-died-aged-80',
  },
  {
    label: 'RNZ tributes roundup',
    url: 'https://www.rnz.co.nz/life/people/celebrity/a-world-less-sparkly-tributes-pour-in-after-death-of-dolly-parton',
  },
  {
    label: 'NZ Herald archive interview',
    url: 'https://www.nzherald.co.nz/entertainment/dolly-parton-on-her-final-solo-album-rockstar-working-with-lizzo-miley-mccartney-and-more/premium/3JNZOMJEIZHCTDMXAIY4DB5QNA/',
  },
  {
    label: 'Wikipedia: Blue Smoke World Tour',
    url: 'https://en.wikipedia.org/wiki/Blue_Smoke_World_Tour',
  },
  {
    label: 'Eventfinda: Inspired by Dolly, Wellington 2023',
    url: 'https://www.eventfinda.co.nz/2023/inspired-by-dolly-celebration-of-the-iconic-dolly-parton/wellington',
  },
  {
    label: 'Dollywood Foundation: Imagination Library',
    url: 'https://imaginationlibrary.com/',
  },
  {
    label: 'Imagination Library: year in review (300 million books)',
    url: 'https://imaginationlibrary.com/news-resources/year-in-review/',
  },
  {
    label: 'TODAY: Dolly Parton breaks 3 Guinness World Records (2021)',
    url: 'https://www.today.com/popculture/dolly-parton-breaks-3-guinness-world-records-see-list-t243473',
  },
  {
    label: 'TODAY: Dolly Parton turned down the Presidential Medal of Freedom twice',
    url: 'https://www.today.com/popculture/dolly-parton-turned-down-presidential-medal-freedom-twice-t207752',
  },
  {
    label: 'Wikipedia: Dolly Parton',
    url: 'https://en.wikipedia.org/wiki/Dolly_Parton',
  },
  {
    label: 'Dolly Parton: official site',
    url: 'https://dollyparton.com/',
  },
  {
    label: 'The Dollywood Foundation',
    url: 'https://dollywoodfoundation.org/',
  },
  {
    label: 'Dollywood',
    url: 'https://www.dollywood.com/',
  },
  {
    label: 'Internet Archive: KDUR Dolly Parton Cover Night, Durango, 2023',
    url: 'https://archive.org/details/kdur_dollyparton_covers_night2023-02-11',
  },
] as const;
