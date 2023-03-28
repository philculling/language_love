import React, { useState } from "react";
import Quiz from 'react-quiz-component';
import quiz from './Quiz';
import PageTitle from "../PageTitle";
import PageSubTitle from "../PageSubTitle";
import { FlashcardArray } from "react-quizlet-flashcard";
import frenchData from '../French.json'
import { Box, Button, Container } from "@mui/material";
import Rouge from '../../sounds/Rouge.mp3';
import Gris from '../../sounds/Gris.mp3';
import Jaune from '../../sounds/Jaune.mp3';
import Noir from '../../sounds/Noir.mp3';
import Orange from '../../sounds/Orange.mp3';
import Rose from '../../sounds/Rose.mp3';
import Vert from '../../sounds/Vert.mp3';
import Bleu from '../../sounds/Bleu.mp3';
import Blanc from '../../sounds/Blanc.mp3';
import Brun from '../../sounds/Brun.mp3';

function French() {

  const [showFlash, setShowFlash] = useState(true);
  const [currentCard, setCurrentCard] = useState(1);


  const handleFlashClick = () => {
    setShowFlash(true);
  };

  const handleQuizClick = () => {
    setShowFlash(false);
  };


  function play() {
    if (currentCard === 1) {
    new Audio(Rouge).play()}
    else if (currentCard === 2) {
      new Audio(Orange).play()}
    else if (currentCard === 3) {
      new Audio(Jaune).play()
    }else if (currentCard === 4) {
      new Audio(Vert).play()
    }else if (currentCard === 5) {
      new Audio(Bleu).play()
    }else if (currentCard === 6) {
      new Audio(Blanc).play()
    }else if (currentCard === 7) {
      new Audio(Noir).play()
    }else if (currentCard === 8) {
      new Audio(Brun).play()
    }else if (currentCard === 9) {
      new Audio(Rose).play()
    }else 
      new Audio(Gris).play()
    }

    const handleCardChange = (index) => {
      setCurrentCard(index);
    };


  return (
    <div>
      <PageTitle title="French"/>
      <PageSubTitle subtitle="French Quiz"/>
      <PageSubTitle subtitle="Colours"/>
      <Container sx={{display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
        <button onClick={play}>Play French word</button>
        <Box sx={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
          <Button color="secondary"   sx={{margin: "10px"}}onClick={handleQuizClick} variant="contained" size="large">Quiz</Button>
          <Button color="secondary" onClick={handleFlashClick} variant="contained" size="large">Flashcards</Button>
        </Box>
        
        {showFlash ? (
          <Box>
          <FlashcardArray 
            cards={frenchData}
            onCardChange={handleCardChange}
          />
          </Box>
        ) : (
          <Box>
            <h2>French Quiz</h2>
            <Quiz quiz={quiz}/>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default French;