import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedBackContext from '../context/FeedBackContext'

function FeedBackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisable, setBtnDisable] = useState(true)
    const [message, setMessage] = useState('')

    const { addFeedBack, feedBackEdit, updateFeedBack } = useContext(FeedBackContext)
    useEffect(() => {
        if (feedBackEdit.edit === true) {
            setBtnDisable(false)
            setText(feedBackEdit.item.text)
            setRating(feedBackEdit.item.rating)
        }
    }, [feedBackEdit])
    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisable(true)
            setMessage(null)
        } else if (text.trim().length < 10) {
            setMessage('Text must be a least 10 character')
            setBtnDisable(true)
        } else {
            setMessage(null)
            setBtnDisable(false)
        }
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedBack = {
                text,
                rating,
            }
            if(feedBackEdit.edit === true){
                updateFeedBack(feedBackEdit.item.id, newFeedBack)
            }else {
                addFeedBack(newFeedBack)
            }
            setText('')
            setRating(10)
            setBtnDisable(true)
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                    <Button type="submit" isDisabled={btnDisable}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedBackForm