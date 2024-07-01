/**
 * Fetches all blog posts from the API.
 * @returns {Promise<any[]>} An array of blog post objects.
 */
export const getPosts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=5",
      {
        method: "GET",
        cache: "force-cache",
      }
    );

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};

/**
 * Fetches a single blog post from the API based on its ID.
 * @param {string} id - The ID of the blog post to fetch.
 * @returns {Promise<any>} A single blog post object.
 */
export async function getPost(id: string) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "GET",
        cache: "force-cache",
      }
    );

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
}
