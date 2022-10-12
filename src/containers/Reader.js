import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Book from '../components/Book'

const Reader = () => {
    const [reader, setReader] = useState({
        books: []
    })
    const [bookFormFlag, setBookFormFlag] = useState(false)

    const params = useParams();
  
    useEffect(() => {
        fetch(`http://localhost:9292/readers/${params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReader(data)
        })
    }, [])

    const books = reader.books.map(b => <Book key={b.id} book={b} />)

    return (
        <div>
            <br />
            <h2>{reader.name}</h2>
            <hr/>
            <h3>Books:</h3>
            <br/>
            {books}
            <br/>
        </div>
    )
}

export default Reader
