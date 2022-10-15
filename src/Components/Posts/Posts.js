import React, { useEffect, useState } from "react";
import axios from "axios";
import Display from "../Display/Display";

const Posts = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    findData();
  }, []);
  const findData = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch(console.log("Show error notification!"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(1);
  };

  if (count === 0) {
    return (
      <div>
        <button onClick={handleSubmit}>data</button>
      </div>
    );
  }

  if (count === 1) {
    return <Display data={data} />;
  }
};

export default Posts;
