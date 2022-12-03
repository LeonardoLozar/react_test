import { createContext, useState, useEffect } from "react";

const FeedBackContext = createContext()

export const FeedBackProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedBack] = useState([])

    useEffect(() => {
        fetchFeedBack()
    },[])

    //Fetch feedback

    const fetchFeedBack = async ()=> {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
        const data = await response.json()
        setFeedBack(data)
        setIsLoading(false)
    }

    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false,
    })

    //delete feedback
    const deleteFeedBack = async (id) => {
        if (window.confirm('Are you sure to delete?')) {
            await fetch(`http://localhost:5000/feedback/${id}`,{method: 'DELETE'})
            setFeedBack(feedback.filter((item) => item.id !== id))
        }
    }

    //add feedback 
    const addFeedBack = async (newFeedBack) => {
        const response = await fetch(`http://localhost:5000/feedback`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedBack),
        })

        const data = await response.json()

        setFeedBack([data, ...feedback])
    }

    //set item to edit feedback
    const editFeedBack = (item) => {
        setFeedBackEdit({
            item,
            edit: true,
        })
    }

    const updateFeedBack = async (id, updItem) => {
        const response = await fetch(`http://localhost:5000/feedback/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })
        const data = await response.json()
        setFeedBack(feedback.map((item) => item.id === id ? { ...item, ...data } : item))
    }

    return <FeedBackContext.Provider value={{
        feedback,
        deleteFeedBack,
        isLoading,
        addFeedBack,
        editFeedBack,
        feedBackEdit,
        updateFeedBack,
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext