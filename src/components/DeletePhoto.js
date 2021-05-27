import React from "react";
import firebase from "firebase";

// Import Styles
import {Delete} from '../styles/deletePhotoStyles'

import { fs, sr } from "../firebase";

const DeletePhoto = ({ url, name, currentSerie }) => {
  const onDelete = async () => {
    const storageRef = sr.ref();
    const fileRef = storageRef.child(name);
    await fileRef.delete();
    fs.collection("series")
      .doc(currentSerie)
      .update({
        images: firebase.firestore.FieldValue.arrayRemove({
          name,
          url,
        }),
      });
  };

  return (
    <>
      <Delete onClick={onDelete}>Delete</Delete>
    </>
  );
};

export default DeletePhoto;
