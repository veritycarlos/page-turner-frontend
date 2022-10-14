import React, { useState, useEffect } from 'react'
import AttrLink from './AttrLink'

const AttrList = () => {
    const [attrs, setAttrs] = useState([])
    // const [placeFormFlag, setPlaceFormFlag] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/attractions')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAttrs(data)
            })
    }, [])

    const attrsList = attrs.map( a => <AttrLink key={a.id} attraction={a} />)

    return (
        <div>
            <br/>
            <h1>Attractions:</h1>
            <h3>
                {attrsList}
            </h3>
        </div>
    )
}

export default AttrList