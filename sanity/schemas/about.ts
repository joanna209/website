import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})
