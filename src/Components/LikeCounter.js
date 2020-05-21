// src/components/LikeCounter.js
import React, { useState, useEffect } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes); // <- using state!
  const [likeTotal, set_totalLikes] = useState(0);

  console.log("what are these?", numLikes, set_numLikes);

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
    set_totalLikes(likeTotal + 1);
  };

  const substract = () => {
    console.log("Yes, resetted! Current number of likes:", numLikes);
    if (numLikes >= 1) {
      set_numLikes(numLikes - 1);
    } else {
      set_numLikes(numLikes);
    }
  };

  const likedThis = () => {
    if (numLikes === 1) {
      return <button onClick={substract}>Click to unlike</button>;
    } else {
      return <button onClick={increment}>Like</button>;
    }
  };

  // const reset = () => {
  //   console.log("Yes, resetted! Current number of likes:", numLikes);
  //   set_numLikes(initial_numLikes);
  // };

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  // return (
  //   <>
  //   <div className="card shadow-sm mb-4">
  //     <div className="card-body pb-0">
  //     <h5 className="card-title">Like this</h5>
  //       <h6 class="card-subtitle mb-3 text-primary">
  //         {likedThis}

  //   </div>
  //   </>
  // );
  return (
    <div className="title-badge component-section-header">
      <h6>This post has been liked {likeTotal}</h6>
      <p>{likedThis()}</p>
    </div>
  );
}
