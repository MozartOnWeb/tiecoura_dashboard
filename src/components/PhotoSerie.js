import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

// Import Styles
import {
  SerieContainer,
  SerieTitle,
  SingleSerieWrapper,
} from "../styles/photoSerieStyles";

// Import Component
import NewPhoto from "../components/NewPhoto";
import DeletePhoto from "./DeletePhoto";

// Import Firestore
import { fs } from "../firebase";

const PhotoSerie = () => {
  const [images, setImages] = useState([]);
  const [serieName, setSerieName] = useState("");

  const match = useRouteMatch("/:serie");
  const { serie } = match.params;

  useEffect(() => {
    fs.collection("series")
      .doc(serie)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
        setSerieName(doc.data().name);
      });
  }, [serie]);

  return (
    <SerieContainer>
      <SerieTitle>{serieName}</SerieTitle>
      <h3>
        Série de photos : <span>{serieName}</span>
      </h3>
      {images.map((image) => (
        <SingleSerieWrapper key={image.name}>
          <img src={image.url} alt={`${image.name}`} />
          <DeletePhoto name={image.name} url={image.url} currentSerie={serie} />
        </SingleSerieWrapper>
      ))}
      <NewPhoto currentSerie={serie} />
    </SerieContainer>
  );
};

export default PhotoSerie;
