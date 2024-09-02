import React, { useState, useEffect } from "react";

import { Container, PostCard } from "../components";
import appwriteService from "../APPWRITE/realConfig";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((posts) => {
    if (posrs) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex.wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
