import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Button,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Post = (props) => {
  const { post, loadPost } = props;
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = () => {
    axios
      .post(
        `https://gorest.co.in/public/v1/posts/?access-token=0b2615c1a03a721cab4d233d474b280bb183123a2c620ccc57b96faca2e959df`,
        {
          id: "TenaliRddasmdakrishna",
          user_id: "tdsljf",
          title: "this is lkdjf;slkdjf;lj",
          body: "active boydodsf;lsf;lj",
        }
      )
      .then((response) => {
        console.log(
          "i am the response of the create post",
          response.data.data.id
        );
        // setData({response.data.data.data: response.data})
      })
      .finally(() => {
        loadPost();
        setTitle("");
        setBody("");
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    createPost();
  }, []);

  const updatePost = (postId) => {
    axios
      .put(
        `https://gorest.co.in/public/v1/posts/${postId}?access-token=0b2615c1a03a721cab4d233d474b280bb183123a2c620ccc57b96faca2e959df`,
        {
          title: title,
          body: body,
        }
      )
      .then((response) => {
        console.log(
          "i am the response of the create post",
          response.data.data.id
        );
        // setData({response.data.data.data: response.data})
      })
      .finally(() => {
        loadPost();
        setTitle("");
        setBody("");
      })
      .catch((error) => console.log(error));
  };

  const deletePost = (postId) => {
    axios
      .delete(
        `https://gorest.co.in/public/v1/posts/${postId}?access-token=0b2615c1a03a721cab4d233d474b280bb183123a2c620ccc57b96faca2e959df`,
        {}
      )
      .then((response) => {
        // console.log(response.data.data.id);
        console.log("post is being deleted successfuly");
        // setData({response.data.data.data: response.data})
      })
      .finally(() => {
        loadPost();
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container
      maxWidth="md"
      style={{
        border: "1px solid black",
        borderRadius: 10,
        padding: "1rem",
        marginBottom: "1rem",
      }}
      key={post.id}
    >
      <Typography variant="h6">
        {post.title} where id is {post.id}
      </Typography>
      <Typography variant="body">{post.body}</Typography>
      <Grid container justifyContent="flex-end">
        <Grid item style={{ margin: ".5rem" }}>
          <Button
            variant="contained"
            onClick={() => {
              deletePost(post.id);
            }}
          >
            Delete post
          </Button>
        </Grid>

        <Grid item style={{ margin: ".5rem" }}>
          <Button
            variant="contained"
            onClick={() => {
              setUpdate(true);
            }}
          >
            update post
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        {update ? (
          <form>
            <TextField
              size="small"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              size="small"
              placeholder="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <Button
              onClick={() => {
                updatePost(post.id);
              }}
            >
              submit
            </Button>
          </form>
        ) : undefined}
      </Grid>
    </Container>
  );
};

export default Post;
