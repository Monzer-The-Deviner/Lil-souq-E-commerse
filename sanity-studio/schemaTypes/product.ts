import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
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
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'images',
      title: 'Images ',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: [{ type: 'collection' }],
    }),
    defineField({
      name: 'sold',
      title: 'Units Sold',
      type: 'number',
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
    }),
    defineField({
      name: 'stars',
      title: 'Rating (Stars)',
      type: 'number',
      validation: Rule => Rule.min(0).max(5),
    }),
  ],
});
