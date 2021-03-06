import React, { useState } from "react";

// Import Styles
import { SerieForm } from "../../styles/newSerieStyles";
import { Submit } from "../../styles/layout";

// Import Toastify
import { toast } from "react-toastify";

// import firestore
import { fs } from "../../firebase";
import firebase from "firebase";

const NewActuality = () => {
  const [actName, setActName] = useState("");

  const onSerieNameChange = (e) => {
    setActName(e.target.value);
  };

  const notifyError = () => toast.error(" 🔥 IMPOSSIBLE DE CRéER CET éVENT");

  const notifySuccess = () => toast.success(" ✔️ éVENT CRéé AVEC SUCCèS");

  const onSerieCreate = () => {
    if (!actName) {
      return notifyError();
    }
    fs.collection("Actualities").doc(actName).set({
      name: actName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setActName("");
    notifySuccess();
  };

  return (
    <SerieForm>
      <input value={actName} onChange={onSerieNameChange} type="text" />
      <Submit new="true" onClick={onSerieCreate}>
        Créer un nouveau évent
      </Submit>
    </SerieForm>
  );
};

export default NewActuality;
