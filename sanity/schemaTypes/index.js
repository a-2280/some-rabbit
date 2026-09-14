import {createPresetsRegistry} from '@sanity/presets'

import featuredProject from './featuredProject'
import hero from './hero'
import layout from './layout'
import page from './page'
import project from './project'
import projectGrid from './projectGrid'

const {defineSeo} = createPresetsRegistry()

export const schemaTypes = [
  page,
  project,
  layout,
  hero,
  featuredProject,
  projectGrid,
  defineSeo({name: 'seo', title: 'SEO'}),
]
