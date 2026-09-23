import {ALL_FIELDS_GROUP, defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {...ALL_FIELDS_GROUP, hidden: true},
    {name: 'main', title: 'Main', default: true},
    {name: 'metadata', title: 'Metadata'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      description: 'Used as the page title.',
      type: 'string',
      group: 'main',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      description: 'Page sections rendered in order. Add, remove, or reorder blocks to build the page.',
      type: 'array',
      group: 'main',
      of: [{type: 'hero'}, {type: 'featuredProject'}, {type: 'projectGrid'}, {type: 'capabilities'}, {type: 'booking'}],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'metadata',
    }),
  ],
  preview: {
    select: {title: 'name'},
  },
})
