const initState = {
    word: "",
    letters: [],
    missedletters: [],
    hangmanState:[],
    lifeWasted: 0,
    gameState: {state: 0, content: ""}
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'NEW_WORD') {
        let word = action.word.toUpperCase()
        console.log(word);
        let wordLetters = word.split('');
        let lettersArray = [];
        for(let i=0; i < wordLetters.length; i++){
            lettersArray = [...lettersArray, {letter: wordLetters[i] , id:""+ i +"", class:"hide"}];
        }
        return {
            ...state,
            word: word,
            letters: lettersArray,
            gameState: {state: 3, content: ""}
        }
    } else if (action.type === 'ERROR') {
        console.log(action.error)
        return{
            ...state,
            gameState: {state: 2, content: "Error"}
        }

    } else if (action.type === 'RESET') {
        return {
            word: "",
            letters: [],
            missedletters: [],
            hangmanState:[],
            lifeWasted: 0,
            gameState: {state: 0, content: ""}
        }

    } else if (action.type === 'CHECK_VALUE' && state.word) {

        if (state.gameState.state === 1 || state.gameState.state === 2) {
            return {
                ...state,
            }
        } else {

            let checkValue = state.letters.some(each => {
                return each.letter === action.value.toUpperCase()
            })
            if (checkValue) {
                let matchObjects = state.letters.filter(e => e.letter === action.value.toUpperCase())
                
                const currentState = [...state.letters]
                matchObjects.forEach(e => {
                    currentState[e.id].class = "";
                })
                let gameWon = currentState.every(e => {
                    return e.class === ""
                })
                if (gameWon === true) {
                    return {
                        ...state,
                        gameState: {state: 1, content: "YOU WON!"},
                        letters: currentState
                    }
                } else {
                    return {
                        ...state,
                        letters: currentState
                    }
                }
            } else {
                let isOnList = state.missedletters.some(e => {
                    return e === action.value
                })
                if(!isOnList) {
                    let missedLetters = [...state.missedletters, action.value]
                    
                    let hgS = [...state.hangmanState, state.lifeWasted+1]
                    let lw = state.lifeWasted + 1
                    
                    if (lw === 9){
                        return {
                            ...state,
                            missedletters: missedLetters,
                            hangmanState: hgS,
                            lifeWasted: lw,
                            gameState: {state: 2, content: "YOU LOST!"}
                        }
                    } else {
                        return {
                            ...state,
                            missedletters: missedLetters,
                            hangmanState: hgS,
                            lifeWasted: lw
                        }
                    }
                } else {
                    return {
                        ...state,
                        
                    }
                }
            }

        }  
    } else {
        return state;
    }
}

export default rootReducer