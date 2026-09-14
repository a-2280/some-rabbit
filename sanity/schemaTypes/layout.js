import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'layout',
  title: 'Layout',
  type: 'document',
  fields: [
    defineField({
      name: 'homePage',
      title: 'Home page',
      description: 'The page served at the site root (/).',
      type: 'reference',
      to: [{type: 'page'}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {name: 'homePage.name'},
    prepare({name}) {
      return {
        title: 'Layout',
        subtitle: name ? `Home page: ${name}` : 'No home page selected',
      }
    },
  },
})
