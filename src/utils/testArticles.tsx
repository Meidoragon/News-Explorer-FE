import { NewsArticle } from './types';
import phImage01 from '../images/placeholder_image_01.png';
import phImage02 from '../images/placeholder_image_02.png';
import phImage03 from '../images/placeholder_image_03.png';
import phImage04 from '../images/placeholder_image_04.png';
import phImage05 from '../images/placeholder_image_05.png';

const testArticles: NewsArticle[] = [
  {
    source: {
      id: 'treehugger',
      name: 'Treehugger',
    },
    _id: '000000',
    publishedAt: 'October 4, 2020',
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    content:
      'Ever since I read Richard Louv&apos;s influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    url: new URL('http://example.com/4'),
    urlToImage: phImage01,
  },
  {
    source: {
      id: 'natgeo',
      name: 'National Geographic',
    },
    _id: '000001',
    publishedAt: 'February 19, 2019',
    title: 'Nature makes you better',
    description:
      'We all know how good nature can make us fell. We have known it for millennia: the sound of the ocean, thescents of a forest, the way dappled sunlight dances through leaves.',
    url: new URL('https://example.com/0'),
    urlToImage: phImage02,
  },
  {
    source: {
      id: 'natpark',
      name: 'National Parks Traveller',
    },
    _id: '000002',
    publishedAt: 'November 4, 2020',
    title: 'Grand Teton Renews Historic Crest Trail',
    content:
      'The linking together of the Cascade and Death Canyon trails, at their heads, took palce on October 1, 1933, and marked the first step in the realization of a plan where by the hiker will be...',
    urlToImage: phImage04,
    url: new URL('https://example.com/1'),
  },
  {
    source: {
      id: 'natgeo',
      name: 'National Geographic',
    },
    _id: '000003',
    publishedAt: 'October 19, 2020',
    title: 'Nostalgic Photos of Tourists in U.S. National Parks',
    content:
      'Uri Løvevild Golman and Helle Løvevild Golman are National Geographic Explorers and conservation photographers who just completed a project and book they call their love letter to...',
    urlToImage: phImage03,
    url: new URL('https://example.com/2'),
  },
  {
    source: {
      id: 'treehugger',
      name: 'Treehugger',
    },
    _id: '000004',
    publishedAt: 'March 16, 2020',
    title: 'Scientists Don&apos;t Know Why Polaris Is So Weird',
    content:
      'Humans have long relied on the starry sky to push into new frontiers, sail to the very edge of the world and find their way back home again. Even animals look to the stars to guide them.',
    urlToImage: phImage05,
    url: new URL('https://example.com/3'),
  },
];

export default testArticles;
