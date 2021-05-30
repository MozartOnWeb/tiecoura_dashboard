import React from 'react'

// Import Components
import PhotoSeries from '../components/PhotoSeries';

//Import Styles
import {
  HomeWrapper,
  HomeHeadrer,
  HomeTitle,
  HomeSubTitle,
  HomeContainer,
} from "../styles/homeStyles";

const Home = () => {

    return (
      <HomeContainer>
        <HomeHeadrer>
          <HomeTitle>Bienvenu Tiecoura</HomeTitle>
          <HomeSubTitle>Ici vous pouvez gérez votre site !</HomeSubTitle>
        </HomeHeadrer>

        <HomeWrapper>
          <HomeTitle thin="true">Gérez vos séries de photo</HomeTitle>
          <PhotoSeries />
        </HomeWrapper>

      </HomeContainer>
    );
}

export default Home
