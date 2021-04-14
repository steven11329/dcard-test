export default function getPosts(beforePostId) {
  let url = '/v2/posts?popular=true';
  if (beforePostId) {
    url += `&before=${beforePostId}`;
  }
  return fetch(url, {})
    .then(res => res.json())
    .catch(() => []);
}
