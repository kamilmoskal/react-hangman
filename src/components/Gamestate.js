import React, { Component } from 'react';
import { connect } from 'react-redux'
import { newWord } from '../newWordAction'

class Gamestate extends Component {
  handleNewWord = () => {
    this.props.newWord();
    this.props.reset();
  }
  render(){
    const { gameState } = this.props
    const game = gameState.state === 0 ? (
        <div className="text">
          <span id="state">LOADING ...</span>
        </div>  
    ) : (   
      <div className="text">
        <span id="state">{gameState.content}</span>
        <span id="newword" onClick={this.handleNewWord}>New Word</span>
      </div>
    )
    
    return (
      <div className="gamestate"> 
        {game}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameState: state.gameState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      newWord: () => { dispatch(newWord()) },
      reset: () => { dispatch({type: 'RESET' }) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Gamestate)
