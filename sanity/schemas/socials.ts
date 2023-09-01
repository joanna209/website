import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'LinkedIn',
      title: 'LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'GitHub',
      title: 'GitHub',
      type: 'url',
    }),
  ],
})
