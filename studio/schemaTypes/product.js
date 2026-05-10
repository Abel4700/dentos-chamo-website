export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  groups: [
    { name: 'core', title: 'Core Information' },
    { name: 'media', title: 'Media & Assets' },
    { name: 'compliance', title: 'Regulatory & Compliance' },
    { name: 'specs', title: 'Technical Specifications' },
    { name: 'relations', title: 'Related Products' },
    { name: 'admin', title: 'Admin & Internal' },
  ],
  fields: [
    // --- ADMIN & INTERNAL ---
    {
      name: 'productId',
      title: 'Product ID (Internal)',
      description: 'Used for matching with Excel/Master data.',
      type: 'string',
      group: 'admin',
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      group: 'admin',
    },
    {
      name: 'featuredProduct',
      title: 'Featured Product',
      description: 'Display with featured badge and higher priority.',
      type: 'boolean',
      initialValue: false,
      group: 'admin',
    },
    {
      name: 'minimumOrderQuantity',
      title: 'Minimum Order Quantity',
      type: 'string',
      group: 'admin',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      description: 'Uncheck to hide this product from the website entirely.',
      type: 'boolean',
      initialValue: true,
      group: 'admin',
    },

    // --- CORE ---
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      group: 'core',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'core',
      options: { source: 'productName', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
      group: 'core',
    },
    {
      name: 'manufacturer',
      title: 'Manufacturer Link',
      description: 'Links to manufacturer record for theming.',
      type: 'reference',
      to: [{ type: 'manufacturer' }],
      group: 'core',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      group: 'core',
      validation: Rule => Rule.required()
    },
    {
      name: 'subcategory',
      title: 'Subcategory',
      type: 'string',
      group: 'core',
    },
    {
      name: 'genericName',
      title: 'Generic Name',
      type: 'string',
      group: 'core',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      group: 'core',
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      group: 'core',
    },
    {
      name: 'intendedUse',
      title: 'Intended Use',
      type: 'text',
      group: 'core',
    },
    {
      name: 'keyFeatures',
      title: 'Key Features',
      type: 'text',
      group: 'core',
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'text',
      group: 'core',
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      group: 'core',
    },
    {
      name: 'priceType',
      title: 'Price Type',
      type: 'string',
      group: 'core',
    },
    {
      name: 'price',
      title: 'Raw Price',
      description: 'Hidden from frontend by default.',
      type: 'number',
      group: 'core',
    },
    {
      name: 'packSize',
      title: 'Pack Size',
      type: 'string',
      group: 'core',
    },

    // --- MEDIA ---
    {
      name: 'mainImage',
      title: 'Product Image',
      type: 'image',
      group: 'media',
      options: { hotspot: true }
    },
    {
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
      group: 'media',
    },
    {
      name: 'datasheetPdf',
      title: 'Datasheet PDF',
      type: 'file',
      group: 'media',
    },
    {
      name: 'instructionManual',
      title: 'Instruction Manual',
      type: 'file',
      group: 'media',
    },

    // --- COMPLIANCE ---
    {
      name: 'manufacturerName',
      title: 'Manufacturer Name',
      type: 'string',
      group: 'compliance',
    },
    {
      name: 'countryOfOrigin',
      title: 'Country of Origin',
      type: 'string',
      group: 'compliance',
    },
    {
      name: 'certification',
      title: 'Certification',
      type: 'string',
      group: 'compliance',
    },
    {
      name: 'regulatoryInfo',
      title: 'Regulatory Info',
      type: 'text',
      group: 'compliance',
    },
    {
      name: 'materialComposition',
      title: 'Material Composition',
      type: 'string',
      group: 'specs',
    },
    {
      name: 'sterileStatus',
      title: 'Sterile / Non-Sterile',
      type: 'string',
      group: 'specs',
    },
    {
      name: 'shelfLife',
      title: 'Shelf Life',
      type: 'string',
      group: 'specs',
    },
    {
      name: 'storageConditions',
      title: 'Storage Conditions',
      type: 'string',
      group: 'specs',
    },

    // --- FLEXIBLE SPECS ---
    {
      name: 'specificationGroups',
      title: 'Specification Groups',
      description: 'Flexible structure for product-type-specific attributes.',
      type: 'array',
      group: 'specs',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'sectionTitle', title: 'Section Title', type: 'string' },
            {
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'value', title: 'Value', type: 'string' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },

    // --- RELATIONS ---
    {
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      group: 'relations',
      of: [{ type: 'reference', to: [{ type: 'product' }] }]
    }
  ]
}
