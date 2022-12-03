import { useParams, Navigate, useNavigate } from 'react-router-dom'

function Post() {
    const params = useParams()
    let status = 404
    const navi = useNavigate()
    const onClick = () => {
        status = 404
        navi('/')
    }
    if (status === 404) {
        return <Navigate to='/about' />
    }
    return (
        <div>
            <h1>
                Post {params.id}
            </h1>
            <button onClick={onClick}>Change</button>
        </div>
    )
}

export default Post
