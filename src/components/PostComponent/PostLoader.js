export async function loaderDetailHandler() {
  const response = await fetch("http://localhost:8080/posts");
  const responseData = await response.json();
  return responseData.posts;
}
