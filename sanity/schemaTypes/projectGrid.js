import {ThLargeIcon} from '@sanity/icons/ThLarge'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectGrid',
  title: 'Project grid',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
      validation: (rule) =>
        rule
          .max(4)
          .custom((projects) => (!projects || projects.length % 2 === 0 ? true : 'Pick 2 or 4.')),
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Project grid'}
    },
  },
})
