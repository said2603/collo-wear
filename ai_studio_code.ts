import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'COLLO WEAR Studio | لوحة تحكم المتجر',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'if8o65te',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      title: 'إدارة المحتوى',
      structure: (S) =>
        S.list()
          .title('لوحة تحكم COLLO WEAR')
          .items([
            S.listItem()
              .title('👕 جميع المنتجات والقطع')
              .child(S.documentList().title('المنتجات').filter('_type == "product"')),
            S.listItem()
              .title('📂 فئات وتصنيفات الملابس')
              .child(S.documentList().title('الفئات').filter('_type == "category"')),
            S.listItem()
              .title('📦 طلبات الزبائن (COD)')
              .child(S.documentList().title('الطلبات').filter('_type == "order"')),
          ]),
    }),
    visionTool({ title: 'مستكشف GROQ' }),
  ],

  schema: {
    types: schemaTypes,
  },
})