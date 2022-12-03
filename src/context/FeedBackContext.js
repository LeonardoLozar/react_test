import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {
    const [feedback, setFeedBack] = useState([
        {
            id: 1,
            rating: 10,
            text: 'Comment one'
        },
        {
            id: 2,
            rating: 9,
            text: 'Comment two'
        },
        {
            id: 3,
            rating: 8,
            text: 'Comment three'
        },
    ])

    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false,
    })

    //delete feedback
    const deleteFeedBack = (id) => {
        console.log('App', id)
        if (window.confirm('Are you sure to delete?')) {
            setFeedBack(feedback.filter((item) => item.id !== id))
        }
    }

    //add feedback 
    const addFeedBack = (newFeedBack) => {
        newFeedBack.id = uuidv4()
        setFeedBack([newFeedBack, ...feedback])

    }

    //set item to edit feedback
    const editFeedBack = (item) => {
        setFeedBackEdit({
            item,
            edit: true,
        })
    }

    const updateFeedBack = (id, updItem) => {
        setFeedBack(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    }

    return <FeedBackContext.Provider value={{
        feedback,
        deleteFeedBack,
        addFeedBack,
        editFeedBack,
        feedBackEdit,
        updateFeedBack,
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext