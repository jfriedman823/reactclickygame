import React, { Component } from 'react';

// components
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";

import characters from "./characters.json";
import './App.css';

class App extends Component {

  state = {
    characters,
    score: "0",
    highScore: "0",
    guessResult: "Click on an image to begin!"
  };

  selectCharacter = id => {
    console.log(this.state.id);
  }


  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          highScore={this.state.highScore}
        />
        <Jumbotron
          guessResult={this.state.guessResult}
        />
        <Wrapper>
          {this.state.characters.map(character => (
          <CharacterCard
            selectCharacter={this.selectCharacter}
            id={character.id}
            key={character.id}
            image={character.image}
          />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
