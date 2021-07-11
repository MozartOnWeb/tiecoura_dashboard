import React, { useState } from "react";

// Import Components
import { Submit } from "../../styles/layout";

// Import Styles
import { UpdateForm } from "../../styles/updateImgStyles";

// Import Toastify
import { toast } from "react-toastify";
import { motion } from "framer-motion";

import { GrUpdate } from "react-icons/gr";
import { BsFileCheck } from "react-icons/bs";

// Import Firestore & Storage
import { fs, sr } from "../../firebase";

const UpdateVideo = ({ name, single }) => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const notifyError2 = () => toast.error(" 🔥 AUCUNE VIDéO CHOISIE");

  const notifySuccess = () => toast.success(" ✔️ MISE à JOUR REUSSIE");

  const onFileChange = (e) => {
    let selected = e.target.files[0];
    setFile(selected);
  };

  const deleteLast = async () => {
    const storageRef = sr.ref();
    try {
      const fileRef = storageRef.child(`videos/OtherVideos/${name}`);
      await fileRef.delete();
    } catch (e) {
      console.log(e);
    }
  };

  const onUpload2 = async (e) => {
    if (file) {
      deleteLast();
      const storageRef = sr.ref();
      const fileRef = storageRef.child(`videos/OtherVideos/${file.name}`);
      await fileRef.put(file).on(
        "state_change",
        (snapshot) => {
          const Percentage = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          setProgress(Percentage);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          fs.collection("OtherVideos")
            .doc(single)
            .update({
              name: file.name,
              url: await fileRef.getDownloadURL(),
            });
          setFile((e.target.value = null));
          notifySuccess();
        },
      );
    }
  };

  return (
    <UpdateForm>
      <label htmlFor="file">
        {file ? <BsFileCheck className="svg2" /> : <GrUpdate />}
      </label>
      <input type="file" onChange={onFileChange} accept="video/*" />
      <Submit onClick={onUpload2}>Mettre à jour</Submit>
      {file && (
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: progress + "%" }}></motion.div>
      )}
    </UpdateForm>
  );
};

export default UpdateVideo;
