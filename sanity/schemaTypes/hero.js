import {TextIcon} from '@sanity/icons/Text'
import {toPlainText} from 'next-sanity'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {title: 'heading'},
    prepare({title}) {
      return {
        title: toPlainText(title || 'Currently no title, set one inside this block'),
        subtitle: 'Hero text',
      }
    },
  },
})
