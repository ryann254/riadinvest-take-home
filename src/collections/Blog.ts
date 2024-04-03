import { CollectionConfig } from 'payload/types';

const Blog: CollectionConfig = {
  slug: 'blog',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
};

export default Blog;
