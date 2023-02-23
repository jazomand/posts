import fetch from 'isomorphic-unfetch';

const cache = new Map<string, any>();

async function fetchData(url: string) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  const response = await fetch(url);
  const data = await response.json();
  cache.set(url, data);
  return data;
}

export async function fetchPosts() {
  const data = await fetchData('https://dummyjson.com/posts');
  return data.posts;
}

export async function fetchPostById(id: string) {
  const data = await fetchData(`https://dummyjson.com/posts/${id}`);
  return data;
}