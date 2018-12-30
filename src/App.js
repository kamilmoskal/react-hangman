import React, { Component } from 'react';
import Hangman from './components/Hangman'
import Word from './components/Word'
import MissedLetters from './components/MissedLetters'
import Gamestate from './components/Gamestate'
import { connect } from 'react-redux'
import { newWord } from './newWordAction'

class App extends Component {
  state = {
    value: ""
  }
  handleKeyboardPressState = (value) => {
    this.setState({
      value: value
    },function(){
      this.props.checkValue(this.state.value);
    })
  }
  componentDidMount(){

    this.props.newWord(); 

    window.addEventListener('keypress',(e) => {
      let value = String.fromCharCode(e.which);
      this.handleKeyboardPressState(value);
    }, false);
  }
  render() {
    const { gameState } = this.props
    const bg = gameState.state === 0 || gameState.state === 1 || gameState.state === 2 ? <Gamestate /> : null
    return (
      <div className="App">
            {bg}
          <div className="container grid">
            <Hangman />
            <Word />
            <MissedLetters />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lifeWasted: state.lifeWasted,
    gameState: state.gameState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      newWord: () => { dispatch(newWord()) },
      checkValue: (value) => { dispatch({type: 'CHECK_VALUE', value: value }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
