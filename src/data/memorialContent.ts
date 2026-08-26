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
  subtitle:
    'The wind keeps her songs: three visits, two Auckland shows, and a country that never let her go.',
  cta: 'Read her story',
  ctaHref: '#story',
} as const;

export const firstShowCopy = {
  eyebrow: 'Aotearoa, 11 July 1979',
  title: 'Her first solo show.',
  body: [
    '"New Zealanders will get their first chance this week to say hello to Queen of Country, Dolly Parton, when the blonde bombshell gives a concert in Auckland." The Press, 9 July 1979.',
    '"Dolly Parton is still coming and will perform with her band on July 11 in the Auckland Town Hall," wrote Rip It Up in June 1979. She was 33; "Jolene" was five years old and "9 to 5" was a year away.',
    'She came back with Kenny Rogers in 1987, and it took until 2014 before she headlined her own show here again.',
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
    year: '1987',
    title: 'Fifty thousand, with Kenny Rogers',
    body: 'Back with Kenny Rogers, Islands in the Stream still hot, she played to a 50,000-strong crowd at Mt Smart Stadium, Auckland, alongside Suzanne Prentice and Billy T. James.',
  },
  {
    year: '1992',
    title: 'The Bodyguard cover',
    body: 'Whitney Houston carried I Will Always Love You to the top of the world. Parton netted roughly $10 million in royalties.',
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
    'She had played here before: Town Hall, Auckland in 1979, and a 50,000-strong Mt Smart Stadium show with Kenny Rogers in 1987. Auckland got her. The rest of Aotearoa kept the songs.',
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
    outlet: 'Eventfinda News',
    date: '30 Oct 2013',
    kind: 'article',
    headline: 'Dolly Parton Auckland Concert Announced',
    quote:
      'Dolly Parton returns to New Zealand next year for the first time in over three decades.',
    url: 'https://www.eventfinda.co.nz/news/2013/10/dolly-parton-announces-auckland-concert',
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
    date: '1 Dec 2013',
    kind: 'article',
    headline: 'Tour news: Dolly Parton to play second NZ show',
    quote:
      "Demand for tickets to the New Zealand leg of Dolly Parton's Blue Smoke World Tour has seen a second show announced in Auckland.",
    url: 'https://www.nzherald.co.nz/entertainment/tour-news-dolly-parton-to-play-second-nz-show/VCEFUMLJQJOKUMWTEI6YOV7DHM/',
  },
  {
    outlet: 'RNZ',
    date: '5 Feb 2014',
    kind: 'audio',
    headline: "Nine to Noon: Marty Duda's artist of the week, Dolly Parton",
    quote:
      'Dolly Parton has a new album out entitled Blue Smoke, and is playing two shows at Auckland\u2019s Vector Arena on 7 and 8 February.',
    url: 'https://www.rnz.co.nz/national/programmes/ninetonoon/audio/2584681/music-with-marty-duda',
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
    outlet: 'Stuff',
    date: '8 Feb 2014',
    kind: 'article',
    headline: 'Dolly Parton dazzles Vector',
    quote:
      'Not many artists could get away with performing a medley of their greatest hits. But Dolly Parton had the packed Vector Arena audience eating out of her hand.',
    url: 'https://www.stuff.co.nz/entertainment/music/gig-reviews/9700133/Dolly-Parton-dazzles-Vector',
  },
  {
    outlet: 'Getty Images',
    date: '7 Feb 2014',
    kind: 'photo',
    headline: 'Dolly Parton performs live for fans at Vector Arena',
    quote: 'Editorial news photographs of her first Auckland night, held by Getty Images.',
    url: 'https://www.gettyimages.com/detail/news-photo/dolly-parton-performs-live-for-fans-at-vector-arena-on-news-photo/467487951',
  },
  {
    outlet: 'YouTube',
    date: '8 Feb 2014',
    kind: 'video',
    headline: 'Jolene, live in Auckland, 8 Feb 2014',
    quote:
      'Dolly Parton: Live in Auckland, New Zealand on the Blue Smoke World Tour. Vector Arena, 8 February 2014.',
    url: 'https://www.youtube.com/watch?v=YU9GAZsN4MA',
  },
  {
    outlet: 'YouTube',
    date: '8 Feb 2014',
    kind: 'video',
    headline: 'Little Sparrow, live in Auckland, 8 Feb 2014',
    quote: 'Dolly Parton - Little Sparrow. Just beautiful! Vector Arena: February 2014.',
    url: 'https://www.youtube.com/watch?v=_DIAJM6U6hI',
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
    quote: '"We loved the people, we loved the food... we just loved everything about it."',
    url: 'https://www.1news.co.nz/2026/08/26/singer-dolly-parton-loved-everything-about-new-zealand/',
  },
  {
    outlet: 'ODT (RNZ)',
    date: '26 Aug 2026',
    kind: 'article',
    headline: 'Dolly wanted a slice of home in NZ',
    quote:
      'It was 1987, and she was here with fellow country music star Kenny Rogers on the Islands in the Stream tour, Parton told New Zealand Women\u2019s Weekly in 2023.',
    url: 'https://www.odt.co.nz/news/national/dolly-wanted-a-slice-of-home-in-nz-kbo67st0',
  },
  {
    outlet: 'NZ Herald',
    date: '26 Aug 2026',
    kind: 'article',
    headline: 'US country music legend Dolly Parton dies at 80',
    quote: 'Country music star Dolly Parton has died at the age of 80.',
    url: 'https://www.nzherald.co.nz/entertainment/us-country-music-legend-dolly-parton-dies-at-80/PITPEVSBYOBJOVR757XVQSESV4/',
  },
];

export const booksCopy = {
  title: 'Three hundred million books.',
  body: [
    'Her Imagination Library mails one free book a month to enrolled children until they start school. More than 300 million books so far.',
    'Aotearoa has its own National Library. She would have loved that.',
  ],
  cta: 'Read about the Imagination Library',
  ctaHref: 'https://dollyparton.com/imagination_library',
} as const;

export interface MusicSong {
  title: string;
  videoId: string;
}

export const musicSongs = [
  { title: 'Jolene', videoId: 'Ixrje2rXLMA' },
  { title: '9 to 5', videoId: 'UbxUSsFXYo4' },
  { title: 'I Will Always Love You', videoId: 'lKsQR72HY0s' },
  { title: 'Islands in the Stream', videoId: 'UaNGtgYwSsU' },
  { title: 'Blue Smoke', videoId: '1Ws8ZHkJjA4' },
] as const satisfies readonly MusicSong[];

export const galleryImages: readonly GalleryImage[] = [
  {
    src: getMemorialImageUrl('dolly-1977.jpg'),
    alt: 'Dolly Parton in a vintage portrait',
    caption: 'Dolly Parton, vintage portrait',
    credit: 'Photo by Alan Light',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_2.jpg',
  },
  {
    src: getMemorialImageUrl('liseberg-2010.jpg'),
    alt: 'Dolly Parton accepting the Liseberg Applause Award in 2010',
    caption: 'Accepting the Liseberg Applause Award, 2010',
    credit: 'Photo by Curtis Hilbun',
    license: 'CC BY 3.0',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Dolly_Parton_accepting_Liseberg_Applause_Award_2010_portrait.jpg',
  },
  {
    src: getMemorialImageUrl('dolly-2023.jpg'),
    alt: 'Dolly Parton in 2023',
    caption: 'Dolly Parton, 2023',
    credit: 'Photo by KIND MUSIC GROUP',
    license: 'CC BY 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Dolly_Parton_2023.jpg',
  },
  {
    src: getMemorialImageUrl('kennedy-2006.jpg'),
    alt: 'Dolly Parton at the Kennedy Center Honors in 2006',
    caption: 'Kennedy Center Honors, 2006',
    credit: 'White House photo by Eric Draper',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2006_Kennedy_Center_honorees_(cropped).jpg',
  },
];

export const sourceLinks = [
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
    label: 'The Press (Papers Past): "Hello, Dolly", 9 July 1979',
    url: 'https://paperspast.natlib.govt.nz/newspapers/CHP19790709.2.101.1',
  },
  {
    label: 'Rip It Up (Papers Past): "Good Golly Ms Dolly", August 1979',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790801.2.16',
  },
  {
    label: 'Rip It Up (Papers Past): "Tours" — 11 July, Auckland Town Hall, June 1979',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19790601.2.8',
  },
  {
    label: 'Rip It Up (Papers Past): "A Living Dolly" album review, October 1977',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19771001.2.32',
  },
  {
    label: 'Rip It Up (Papers Past): "Dolly Parton charmed them all", July 1987',
    url: 'https://paperspast.natlib.govt.nz/periodicals/RIU19870701.2.14.14',
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
    url: 'https://dollyparton.com/imagination_library',
  },
] as const;
