import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Book from '../components/Book'

const Reader = (props) => {
    const [reader, setReader] = useState({
        books: []
    })
    const [bookFormFlag, setBookFormFlag] = useState(false)

    const params = useParams();
    // const readerid = useId()
   
    useEffect(() => {
        debugger
        fetch(`http://localhost:9292/readers/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    return (
        <div>
            <h3>I am a Reader</h3>
        </div>
    )
}

export default Reader
