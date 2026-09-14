import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuredProject',
  title: 'Featured project',
  type: 'object',
  fields: [
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [{type: 'project'}],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'project.title', collaborator: 'project.collaborator', media: 'project.poster'},
    prepare({title, collaborator, media}) {
      return {
        title: title || 'No project selected',
        subtitle: collaborator ? `with ${collaborator}` : 'Featured project',
        media,
      }
    },
  },
})
