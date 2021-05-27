import React from "react";

// Import Styles
import { Delete } from "../styles/deleteSerieStyles";

// Import Firebase
import { fs } from "../firebase";

const DeleteSerie = ({ name }) => {
  const onDelete = () => {
    fs.collection("series").doc(name).delete();
  };
  return (
    <>
      <Delete onClick={onDelete}>Delete</Delete>
    </>
  );
};

export default DeleteSerie;
