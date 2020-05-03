import { MarvelResponse } from './interfaces'

const testData: MarvelResponse = {
  data: [
    {
      id: 1011386,
      name: 'Karma',
      description: '',
      modified: new Date('2016-02-04T12:31:16-0500'),
      thumbnail: {
        path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/00/50febe78aacca',
        extension: 'jpg',
      },
      resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011386',
      comics: {
        available: 52,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011386/comics',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40802',
            name: 'Astonishing X-Men (2004) #52',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40808',
            name: 'Astonishing X-Men (2004) #56',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/40807',
            name: 'Astonishing X-Men (2004) #57',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45819',
            name: 'Astonishing X-Men (2004) #58',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45820',
            name: 'Astonishing X-Men (2004) #59',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45821',
            name: 'Astonishing X-Men (2004) #60',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45822',
            name: 'Astonishing X-Men (2004) #61',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45823',
            name: 'Astonishing X-Men (2004) #62',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45824',
            name: 'Astonishing X-Men (2004) #63',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45825',
            name: 'Astonishing X-Men (2004) #64',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45826',
            name: 'Astonishing X-Men (2004) #65',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45827',
            name: 'Astonishing X-Men (2004) #66',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45828',
            name: 'Astonishing X-Men (2004) #67',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/45829',
            name: 'Astonishing X-Men (2004) #68',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/24262',
            name: 'New Mutants (2009) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/10322',
            name: 'New Mutants (2003) #1',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/27398',
            name: 'New Mutants (2009) #1 (BENJAMIN VARIANT)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/26051',
            name: 'New Mutants (2009) #2',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/26052',
            name: 'New Mutants (2009) #3',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/10329',
            name: 'New Mutants (2003) #4',
          },
        ],
        returned: 20,
      },
      series: {
        available: 11,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011386/series',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
            name: 'Astonishing X-Men (2004 - 2013)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/563',
            name: 'New Mutants (2003 - 2004)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/7455',
            name: 'New Mutants (2009 - 2012)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/24008',
            name: 'New Mutants by Zeb Wells: The Complete Collection (2018)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1763',
            name: 'New Mutants Classic Vol. 1 (2006)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1764',
            name: 'New Mutants Classic Vol. 2 (2007)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/13519',
            name: 'New Mutants Classic Vol. 6 (2010 - Present)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/267',
            name: 'New Mutants Vol 1: Back to School (2003)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/1186',
            name: 'New Mutants Vol 1: Back to School (2005)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
            name: 'Uncanny X-Men (1963 - 2011)',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/series/2104',
            name: 'X-Men: Alpha (1995)',
          },
        ],
        returned: 11,
      },
      stories: {
        available: 68,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011386/stories',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/596',
            name: 'New Mutants (2003) #8',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/597',
            name: 'Interior #597',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1296',
            name: 'New Mutants (2003) #5',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1297',
            name: 'Interior #1297',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1596',
            name: 'New Mutants (2003) #10',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1597',
            name: 'Interior #1597',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1888',
            name: 'New Mutants (2003) #9',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1889',
            name: 'Interior #1889',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1901',
            name: 'New Mutants (2003) #12',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1902',
            name: 'Interior #1902',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1903',
            name: 'New Mutants (2003) #13',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/1904',
            name: 'Interior #1904',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2079',
            name: 'New Mutants (2003) #7',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2080',
            name: 'Interior #2080',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2155',
            name: 'New Mutants (2003) #11',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2156',
            name: 'Interior #2156',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2533',
            name: 'New Mutants (2003) #6',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/2534',
            name: 'Interior #2534',
            type: 'interiorStory',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26240',
            name: 'New Mutants (2003) #1',
            type: 'cover',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/stories/26241',
            name: 'The Wind Knows My Name',
            type: 'interiorStory',
          },
        ],
        returned: 20,
      },
      events: {
        available: 2,
        collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011386/events',
        items: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
            name: 'Age of Apocalypse',
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
            name: 'Fear Itself',
          },
        ],
        returned: 2,
      },
      urls: [
        {
          type: 'detail',
          url:
            'http://marvel.com/comics/characters/1011386/karma?utm_campaign=apiRef&utm_source=07933b3939e6c43444a8d1eb8c4203c7',
        },
        {
          type: 'wiki',
          url: 'http://marvel.com/universe/Karma?utm_campaign=apiRef&utm_source=07933b3939e6c43444a8d1eb8c4203c7',
        },
        {
          type: 'comiclink',
          url:
            'http://marvel.com/comics/characters/1011386/karma?utm_campaign=apiRef&utm_source=07933b3939e6c43444a8d1eb8c4203c7',
        },
      ],
    },
  ],
  meta: {
    offset: 0,
    limit: 100,
    total: 10,
    count: 10,
  },
}

export default testData
