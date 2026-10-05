import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'landscapes',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Landscapes',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '026dea32-9637-5a90-8cb3-ddf63a376262',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '8750b2ef-ed27-560f-a5b8-9740d8ab180c',
    dynasty: {
      item: 'b4f079f1-9f1d-5622-ac99-7add9077bf23',
      name: 'Ottomans',
    },
    timeline: {
      code: 'tr',
      id: 'tur',
      country: 'Türkiye',
    },
    partner: {
      id: 'c0c2fa4f-c38c-578e-8cc1-4703cc60b8a9',
      name: 'Museum of Turkish and Islamic Arts',
      city: 'İstanbul',
      country: 'Türkiye',
      objects: 1,
    },
  },
})
