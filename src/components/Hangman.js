import React from 'react'
import { connect } from 'react-redux'

const Hangman = (props) => {
  const { hangmanState } = props

  const hgImages = hangmanState.length ? (
    hangmanState.map(each => {
      return (
        <img src={require(`../img/${each}.png`)} alt="" key={Math.random()*10} className="hg-images"/>
      )
    })
  ) : (
    <span></span>
  )

  return (
        <div className="hangman">
          <img src={require('../img/0.png')} alt="" className="hg-images grass"/>
            {hgImages}
        </div>
  )
}

const mapStateToProps = (state) => {
  return {
    hangmanState: state.hangmanState
  }
}


export default connect(mapStateToProps)(Hangman)
