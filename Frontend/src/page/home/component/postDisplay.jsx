import React, { useContext, useEffect } from "react";
import PostItems from "../../../component/postItems";
import { PostContext } from "../../../../src/contexts/postContext";
import Ripple from "@bit/joshk.react-spinners-css.ripple";
import { CommentContext } from "../../../contexts/cmtContext";

export default function PostDisplay() {
  // get global data by useContext
  const {
    postState: { searchpost, posts, postsLoading },
    getPosts,
  } = useContext(PostContext);
  console.log(searchpost);

  // start get all posts
  useEffect(() => getPosts(), []);

  // search filter post
  const postData = posts.filter((post) => {
    if (searchpost == "") {
      return post;
    }
    return post.user.userName == searchpost;
  });
  console.log(postData);

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
        {postData.map((post, i) => (
          <PostItems post={post} key={i} />
        ))}
      </div>
    );
  }
}
