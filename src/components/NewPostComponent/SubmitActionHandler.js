import { redirect } from "react-router-dom";

const SubmitFormActionHandler = async ({ request }) => {
  const formDetail = await request.formData();
  const postDetail = Object.fromEntries(formDetail);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postDetail),
    headers: {
      "content-type": "application/json",
    },
  });
  return redirect("/");
};

export { SubmitFormActionHandler };
