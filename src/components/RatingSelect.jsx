import { useState, useContext, useEffect } from 'react'
import FeedBackContext from '../context/FeedBackContext'

function RatingSelect({ select }) {

  const { feedBackEdit } = useContext(FeedBackContext)

  useEffect(() => {
    if(feedBackEdit.item === true){
      setSelected(feedBackEdit.item.rating)
    }else{
      setSelected(10)
    }
    
  }, [feedBackEdit])

  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

RatingSelect.defaultProps = {
  select: 10,
}

export default RatingSelect