import React, { Component } from 'react';
import { connect } from 'react-redux'

class Word extends Component {
    render(){
  
        const { letters } = this.props
     
        const letterList = letters.length ? (
            letters.map(each => {
                return (
                    <div className={'letter ' + each.class} key={each.id}><span className={each.class}>{each.letter}</span></div>
                ) 
            })
        ) : (
            <span></span>
        )
        return (
            <div className="word">
                {letterList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        letters: state.letters
    }
}

export default connect(mapStateToProps)(Word)
