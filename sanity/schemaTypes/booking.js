import {CalendarIcon} from '@sanity/icons/Calendar'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'booking',
  title: 'Booking',
  type: 'object',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'calLink',
      title: 'Cal.com link',
      type: 'string',
      initialValue: 'somerabbit/30min',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {calLink: 'calLink'},
    prepare({calLink}) {
      return {title: 'Booking', subtitle: calLink}
    },
  },
})
