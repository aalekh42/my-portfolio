import * as prismic from '@prismicio/client';

export const repositoryName = 'yaportfolio';
export const client = prismic.createClient(repositoryName, {
  //accessToken: 'your-access-token', // Optional
});
