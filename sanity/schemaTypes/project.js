import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {accept: 'video/*'},
    }),
    defineField({
      name: 'poster',
      title: 'Fallback image',
      type: 'image',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'collaborator',
      title: 'Collaborator',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'comingSoon',
      title: 'Coming soon',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      hidden: ({parent}) => parent?.comingSoon,
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {title: 'title', collaborator: 'collaborator', media: 'poster'},
    prepare({title, collaborator, media}) {
      return {
        title: title || 'Currently no title, set one inside this block',
        subtitle: collaborator ? `with ${collaborator}` : 'Project',
        media,
      }
    },
  },
})
