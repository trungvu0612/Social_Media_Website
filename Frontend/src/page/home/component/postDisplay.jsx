import React, { useContext, useEffect } from "react";
import PostItems from "../../../component/postItems";
import { PostContext } from "../../../../src/contexts/postContext";
import Ripple from "@bit/joshk.react-spinners-css.ripple";

export default function PostDisplay() {
  // get global data by useContext
  const {
    postState: { posts, postsLoading },
    getPosts,
  } = useContext(PostContext);

  // start get all posts
  useEffect(() => getPosts(), []);

  if (postsLoading) {
    return (
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        <Ripple
          style={{
            top: "50%",
            left: "50%",
            position: "relative",
            transform: "translate(-50%, -50%)",
          }}
          color="#be97e8"
        />{" "}
        ;{" "}
      </div>
    );
  } else {
    return (
      <div className="postdisplay post-list post-list-0 ">
        {posts.map((post) => (
          <PostItems post={post} />
        ))}
      </div>
    );
  }
}
