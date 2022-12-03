import { FaTimes, FaEdit } from 'react-icons/fa'
//import {useState} from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedBackContext from '../context/FeedBackContext'


function FeedBackItem({ item }) {

    const { deleteFeedBack, editFeedBack } = useContext(FeedBackContext)

    /**const [rating, setRating] = useState(7)
    const [text, setText] = useState('This is an example of a FeedBackItemsetRatingThis is an example of a FeedBackItemsetRating')
    const handleClick = () => {
        setRating((prev) => {
            console.log(prev)
            return prev + 1
        })
    } */
    return (
        <Card>
            <div className='num-display'>{item.rating}</div>
            <button onClick={() => deleteFeedBack(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <button onClick={() => editFeedBack(item)} className='edit'>
                <FaEdit color='purple' />
            </button>
            <div className='text-display'>{item.text}</div>
        </Card>
    )
}

FeedBackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedBackItem