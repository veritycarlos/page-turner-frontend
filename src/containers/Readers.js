import React, { useState, useEffect } from 'react'
import ReaderLink  from '../components/ReaderLink'

const Readers = () => {
    const [readers, setReaders] = useState([])
    const [readerFormFlag, setReaderFormFlag] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/readers')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReaders(data)
        })
    }, [])

    const readersList = readers.map( r => <ReaderLink key={r.id} reader={r} />)

    return (
        <div>
            <ul>
                {readersList}
            </ul>
        </div>
    )
}

export default Readers
