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
import SerieDesc from "./SerieDesc";

// Import Firestore
import { fs } from "../firebase";

const PhotoSerie = () => {
  const [images, setImages] = useState([]);
  const [serieName, setSerieName] = useState("");
  const [serieDesc, setSerieDesc] = useState("");

  const match = useRouteMatch("/:serie");
  const { serie } = match.params;

  useEffect(() => {
    fs.collection("series")
      .doc(serie)
      .onSnapshot((doc) => {
        setImages(doc.data().images || []);
        setSerieName(doc.data().name);
        setSerieDesc(doc.data().desc);
      });
  }, [serie]);

  return (
    <SerieContainer>
      <SerieTitle>
        Série de photos : <span>{serieName}</span>
      </SerieTitle>
      <h3></h3>
      {images.map((image) => (
        <SingleSerieWrapper key={image.name}>
          <img src={image.url} alt={`${image.name}`} />
          <DeletePhoto name={image.name} url={image.url} currentSerie={serie} />
        </SingleSerieWrapper>
      ))}
      <NewPhoto currentSerie={serie} />
      <SerieDesc currentSerie={serie} />
    </SerieContainer>
  );
};

export default PhotoSerie;
