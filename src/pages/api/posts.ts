import fetch from 'isomorphic-unfetch';

const cache = new Map<string, any>();

export const fetchData = async (url: string) => {
  if (cache.has(url)) {
    return cache.get(url);
  }

  const res = await fetch(url);
  const data = await res.json();
  cache.set(url, data);
  return data;
};

export const fetchPosts = async () => {
  const data = await fetchData('https://dummyjson.com/posts');
  return data.posts;
};
