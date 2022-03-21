import React from "react";
import UseFetch from "../hooks/UseFetch";

function CustomHookExample1() {
  const res = UseFetch("https://jsonplaceholder.typicode.com/posts", {});
  if (res.loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {res.data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
}

export default CustomHookExample1;
