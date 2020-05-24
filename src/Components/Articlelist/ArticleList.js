import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ArticleList() {
  //Add a button to the top of the article list that shows the text "Clear notifications".
  //When you click it, the articles should disappear.
  //Hint: this is a state management problem.

  const [articles, set_articles] = useState([]);

  const clear = (event) => {
    set_articles([]);
  };

  async function doSomeDataFetching() {
    console.log("I'm gonna fetch some data!");

    // Getting back data from the net, through the wire, air, and the ocean:
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    set_articles(res.data);

    console.log("Got back:", res);
  }

  useEffect(() => {
    doSomeDataFetching();
  }, []);

  return (
    <div>
      <button onClick={clear}>Clear notification</button>
      <button onClick={doSomeDataFetching}>Get me sone data!</button>
      {articles.map((stuff) => {
        return (
          <li>
            <p>Title: {stuff.title}</p>
            <p>Content: {stuff.body}</p>
          </li>
        );
      })}
    </div>
  );
}
