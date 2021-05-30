import React, { useState } from "react";
import firebase from "firebase";

// Import Components
import { Submit } from "../styles/layout";

// Import Styles
import { PhotoForm } from "../styles/newPhotoStyles";

// Import Firestore & Storage
import { fs, sr } from "../firebase/";

const NewPhoto = ({ currentSerie }) => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    const storageRef = sr.ref();
    const fileRef = storageRef.child(`images/${currentSerie}/${file.name}`);
    await fileRef.put(file);
    fs.collection("series")
      .doc(currentSerie)
      .update({
        images: firebase.firestore.FieldValue.arrayUnion({
          name: file.name,
          url: await fileRef.getDownloadURL(),
        }),
      });
    setFile(null)
  };

  return (
    <PhotoForm>
      <input type="file" onChange={onFileChange} />
      <Submit onClick={onUpload}>Ajouter cette image</Submit>
    </PhotoForm>
  );
};

export default NewPhoto;
