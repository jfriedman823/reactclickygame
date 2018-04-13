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
    guessedCharacters: [],
    guessResult: "Click on an image to begin!"
  };

  selectCharacter = id => {
    const selectedCharacter = this.state.characters.find(character => character.id === id);
    const guessedCharacters = this.state.guessedCharacters;

    if (guessedCharacters.includes(selectedCharacter)) {
      this.setState({ score: 0 });
      this.setState({ guessedCharacters: [] });
      this.setState({ guessResult: "I'm sorry you already guessed that one."});
    } else {
      guessedCharacters.push(selectedCharacter);
      this.setState({ guessedCharacters: guessedCharacters });
      
      let currentScore = this.state.score;
      const currentHighScore = this.state.highScore;
      currentScore ++;
      this.setState({ score: currentScore });
      this.setState({ guessResult: "Good job!" });

      if (currentScore > currentHighScore) {
        this.setState({ highScore: currentScore});
      };

    }

    console.log(this.state.guessedCharacters);
  };


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
