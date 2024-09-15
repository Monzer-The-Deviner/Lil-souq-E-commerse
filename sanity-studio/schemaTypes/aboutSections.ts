import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About sections',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
    }),
    defineField({
      name: 'text',
      title: 'Text area',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
});
