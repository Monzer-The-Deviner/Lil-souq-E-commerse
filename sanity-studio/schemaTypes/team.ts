import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'team',
  title: 'Team sections',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'role',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
    }),
    defineField({
      name: 'quote',
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
