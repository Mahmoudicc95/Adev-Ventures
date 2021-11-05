import React, { useEffect, useState } from "react";
import axios from "axios";

const Update = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .delete(
        "https://gorest.co.in/public/v1/comments/34?access-token=0b2615c1a03a721cab4d233d474b280bb183123a2c620ccc57b96faca2e959df",
        {
          name: "Hellold!",
          email: "updatedEmail@updatedEmail.updatedEmail",
        }
      )
      .then((response) => {
        console.log(response.data.data.id);
        // setData({response.data.data.data: response.data})
      })
      .catch((error) => console.log(error));
  }, []);

  return <div></div>;
};

export default Update;
