import React from 'react'
import { connect } from 'react-redux'

const MissedLetters = (props) => {
  const { missedletters } = props

  const mL = missedletters.length ? (
    missedletters.map(each => {
      return (
        <div className="missedletter" key={Math.random()*10}>{each}</div>
      )
    })
  ) : (
    <span></span>
  )
  

  return (
    <div className="missedletters">
        <span>Missed letters:</span>
        {mL}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      missedletters: state.missedletters
  }
}

export default connect(mapStateToProps)(MissedLetters)
