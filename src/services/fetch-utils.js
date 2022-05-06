import { client } from './client.js';

export async function getCandies() {
  const response = await client
    .from('Candies')
    .select('*');

  return response.body;
}

export async function getCats() {
  const response = await client
    .from('cats')
    .select('*');

  return response.body;
}