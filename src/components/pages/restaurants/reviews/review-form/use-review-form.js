import { useReducer } from 'react'
import reviewFormReducer from './review-form-reducer'
import { v4 } from 'uuid'

const useReviewForm = ({ onAddItem }) => {
    const [state, dispatch] = useReducer(reviewFormReducer, {
        user: '',
        text: '',
        rating: 1,
    })

    const disableClear = state.user === '' && state.text === ''
    const disableSubmit = state.user === '' || state.text === ''

    const onChange = (fieldName, value) => {
        dispatch({ type: fieldName, payload: value })
    }

    const onReset = () => {
        dispatch({ type: 'reset' })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onAddItem({ ...state, id: v4() })
        dispatch({ type: 'reset' })
    }

    return {
        state,
        disableClear,
        disableSubmit,
        onChange,
        onReset,
        onSubmit,
    }
}

export default useReviewForm
