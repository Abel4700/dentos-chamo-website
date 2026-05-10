import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'manufacturer',
  title: 'Manufacturer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'color',
      title: 'Brand Color (Hex)',
      type: 'string',
      description: 'e.g., #4b66df',
    }),
    defineField({
      name: 'bg',
      title: 'Background Gradient',
      type: 'string',
      description: 'e.g., linear-gradient(135deg, rgba(75,102,223,0.05) 0%, rgba(75,102,223,0.1) 100%)',
    }),
    defineField({
      name: 'pdf',
      title: 'Catalogue PDF',
      type: 'file',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Used to sequence brand cards in the catalog.',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      description: 'Uncheck to hide this brand and all its products from the website.',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
