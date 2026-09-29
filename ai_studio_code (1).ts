import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'المنتج (القطعة)',
  type: 'document',
  icon: () => '🧥',
  fields: [
    defineField({
      name: 'name',
      title: 'اسم القطعة بالعربية',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'الرابط الدائم (Slug)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'الفئة / التصنيف',
      type: 'string',
      options: {
        list: [
          { title: '🧥 بدلات وسترات (jackets)', value: 'jackets' },
          { title: '👔 قمصان ملكية (shirts)', value: 'shirts' },
          { title: '👕 تيشيرتات وبولو (tshirts)', value: 'tshirts' },
          { title: '👖 سراويل وتشينو (pants)', value: 'pants' },
          { title: '👞 أحذية كلاسيك ولوفر (shoes)', value: 'shoes' },
          { title: '⌚ إكسسوارات وساعات (accessories)', value: 'accessories' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'السعر الحالي (د.ج DZD)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'oldPrice',
      title: 'السعر قبل الخصم (اختياري)',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'صورة المنتج',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'emoji',
      title: 'رمز تعبيري سريع (Emoji)',
      type: 'string',
      initialValue: '🧥',
    }),
    defineField({
      name: 'tag',
      title: 'شارة ترويجية (Badge)',
      type: 'string',
      initialValue: 'جديد',
    }),
    defineField({
      name: 'sizes',
      title: 'المقاسات المتوفرة',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: ['M', 'L', 'XL'],
    }),
    defineField({
      name: 'inStock',
      title: 'متوفر في المخزون؟',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'وصف القطعة',
      type: 'text',
      rows: 3,
    }),
  ],
})