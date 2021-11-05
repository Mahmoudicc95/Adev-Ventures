import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Button,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Post from "./post";
import axios from "axios";
import GetData from "./GetData";
import Update from "./Update";
// import Navbar from "./Navbar";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const loadPosts = () => {
    axios
      .get("https://gorest.co.in/public/v1/posts")
      .then((res) => {
        // console.log("this is the response", res.data.data);
        setData(res.data.data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadPosts();
  }, [loading]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      {data.map((post) => {
        // console.log('this is the ffff id', post.id)
        return (
          <React.Fragment key={post.id}>
            {/* <Post post={post} loadPost={loadPosts} /> */}
            <GetData />
            <Update />
          </React.Fragment>
        );
      })}
    </>
  );
}
export default App;
