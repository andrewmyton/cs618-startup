export const getPosts = async (queryParams) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/posts?` +
      new URLSearchParams(queryParams),
  )
  return await res.json()
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bc8b4d85 (chore: pg117)

export const createPost = async (post) => {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/
posts`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    },
  )
  return await res.json()
}
<<<<<<< HEAD
=======
>>>>>>> 84cbbf65 (chore: add TanStack)
=======
>>>>>>> bc8b4d85 (chore: pg117)
