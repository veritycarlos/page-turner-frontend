import React from 'react'
import { Link } from 'react-router-dom'

const ReaderLink = ({reader}) => {
  return (
    <div> <Link to={`/readers/${reader.id}`}>
            <h3>{reader.name}</h3>
        </Link>
    </div>
  )
}

export default ReaderLink
