import { useMemo, useReducer } from 'react'
import Counter from '../components/counter/counter'
import classes from './review-form.module.css'
import reviewFormReducer from './review-form-reducer'

export default function ReviewForm({ onAddReview }) {
    const [state, dispatch] = useReducer(reviewFormReducer, {
        name: '',
        text: '',
        rating: 1,
    })

    const disableClear = useMemo(() => {
        return state.name === '' && state.text === ''
    }, [state])

    const disableSubmit = useMemo(() => {
        return state.name === '' || state.text === ''
    }, [state])

    const handleChange = (fieldName, value) => {
        dispatch({ type: fieldName, payload: value })
    }

    const handleReset = () => {
        dispatch({ type: 'reset' })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddReview({ ...state })
        dispatch({ type: 'reset' })
    }

    return (
        <div className={classes.container}>
            <h3>Форма отзыва</h3>
            <div className={classes.field}>
                <label htmlFor='name'>Имя</label>
                <input
                    id='name'
                    name='name'
                    value={state.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                />
            </div>
            <div className={classes.field}>
                <label htmlFor='text'>Текст</label>
                <textarea
                    id='text'
                    name='text'
                    value={state.text}
                    onChange={(e) => handleChange('text', e.target.value)}
                />
            </div>
            <div className={classes.field}>
                <label htmlFor='text'>Рейтинг</label>
                <Counter
                    count={state.rating}
                    max={5}
                    min={1}
                    onChange={(delta) =>
                        handleChange('rating', state.rating + delta)
                    }
                />
            </div>
            <div className={classes.buttonRow}>
                <button disabled={disableClear} onClick={handleReset}>
                    Очистить
                </button>
                <button disabled={disableSubmit} onClick={handleSubmit}>
                    Добавить
                </button>
            </div>
        </div>
    )
}
