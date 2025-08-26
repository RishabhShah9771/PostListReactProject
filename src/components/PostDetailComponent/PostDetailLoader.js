const PostDetailLoaderFn = async ({ params }) => {
  const response = await fetch("http://localhost:8080/posts" + params.id);
  const resData = await response.json();
  return resData.post;
};
export { PostDetailLoaderFn };
