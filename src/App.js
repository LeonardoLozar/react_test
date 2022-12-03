import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats'
import FeedBackForm from './components/FeedBackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Post from './components/Post'
import { FeedBackProvider } from './context/FeedBackContext'

function App() {
    const title = 'My App'
    const body = 'This is my blog post'
    /*const comments = [
        {id:1, text: 'Comment one'},
        {id:2, text: 'Comment two'},
        {id:3, text: 'Comment three'}
    ]
    const commentBlock =<div className='comments'>
                            <h3>comments ({comments.length})</h3>
                            <ul>
                                {comments.map((comment,index) => (<li key={index}>{comment.text}</li>))}
                            </ul>
                        </div>
    const loading = false
    const showComments = true
    
    //if (loading) return <h1> Loading...</h1>*/
    return (
        <FeedBackProvider>
            <Router>
                <Header />
                <div className='container'>
                    <h1>{title}</h1>
                    <p>{body}</p>

                    <div>
                        <Routes>
                            <Route exact path='/' element={
                                <>
                                    <FeedBackForm />
                                    <FeedBackStats />
                                    <FeedBackList />
                                    <p>
                                    </p>
                                </>
                            } />
                            <Route path='/about' element={<AboutPage />} />
                            <Route path='/post/:id' element={<Post />} />
                        </Routes>
                    </div>
                    <AboutIconLink />
                </div>
            </Router>
        </FeedBackProvider>
    )
}

export default App