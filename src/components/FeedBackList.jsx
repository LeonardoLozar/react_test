import { motion, AnimatePresence } from 'framer-motion'
//import PropTypes from 'prop-types'
import FeedBackItem from './FeedBackItem'
import { useContext } from 'react'
import FeedBackContext from '../context/FeedBackContext'
import Spinner from './shared/Spinner'

function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedBackContext)
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No feedback yet</p>
  }
  return isLoading ? 
    <Spinner/> : (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem
              key={item.id}
              item={item}

            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

/* FeedBackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
  } */

export default FeedBackList