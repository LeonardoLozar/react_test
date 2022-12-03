// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedBackContext from '../context/FeedBackContext'

function FeedBackStats() {
    const { feedback } = useContext(FeedBackContext)
    let average = feedback.reduce((acum, current) => {
        return (acum + current.rating)
    }, 0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length}</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}
/* 
FeedBackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}
 */

export default FeedBackStats