import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Typography } from "@material-ui/core";

function GetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v1/users")
      .then((res) => {
        console.log("this is the response", res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="GetData">
      {data.map((record) => {
        return (
          <Container
            maxWidth="sm"
            style={{
              border: "1px solid black",
              borderRadius: 10,
              padding: "1rem",
              marginBottom: "1rem",
            }}
            key={record.id}
          >
            <Typography variant="h6">
              <div>ID: {record.id}</div>
            </Typography>
            <Typography variant="h6">
              <div>Email: {record.email}</div>
            </Typography>
            <Typography variant="h6">
              <div>Name: {record.name}</div>
            </Typography>
            <Typography variant="h6">
              <div>Status: {record.status}</div>
            </Typography>
            <Typography variant="h6">
              <div>Gender: {record.gender}</div>
            </Typography>
          </Container>
        );
      })}
    </div>
  );
}
export default GetData;
