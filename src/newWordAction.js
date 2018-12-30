
export const newWord = () => {
    return (dispatch) => {
    
        fetch('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=4&maxLength=8&api_key=82cb40ed55fb0e7abe00509d3dd0f38baa90416783e9aafbb')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'NEW_WORD', word: data.word});
            })
            .catch(error => {
                dispatch({ type: 'ERROR', error});
            })
        }
    }
        