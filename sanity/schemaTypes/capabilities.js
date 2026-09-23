import {TagsIcon} from '@sanity/icons/Tags'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'capabilities',
  title: 'Capabilities',
  type: 'object',
  icon: TagsIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {items: 'items'},
    prepare({items}) {
      return {
        title: 'Capabilities',
        subtitle: items?.length ? items.join(', ') : 'No items yet, add some inside this block',
      }
    },
  },
})
