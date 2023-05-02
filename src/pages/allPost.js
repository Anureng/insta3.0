import AllPost from "@/components/AllPost";
import CreatePost from "@/components/CreatePost";
import Navbar from "@/components/Navbar";
import SeperatePost from "@/components/SeperatePost";
import React from "react";

function allPost() {
  return (
    <div>
      <Navbar />
      {/* <SeperatePost /> */}
      <CreatePost />
      <AllPost />
    </div>
  );
}

export default allPost;
