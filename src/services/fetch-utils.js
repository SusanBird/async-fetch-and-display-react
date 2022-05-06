import { client } from './client.js';

export async function getCandies() {
  const response = await client
    .from('Candies')
    .select('*');

  return response.body;
}