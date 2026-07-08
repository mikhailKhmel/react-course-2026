export default function reviewFormReducer(state, action) {
    switch (action.type) {
        case 'name': {
            return {...state, name: action.payload}
        }
        case 'text': {
            return {...state, text: action.payload}
        }
        case 'rating': {
            return {...state, rating: action.payload}
        }
        case 'reset': {
            return {...state, name: '', text: '', rating: 1}
        }
        default: {
            return state
        }
    } 
}