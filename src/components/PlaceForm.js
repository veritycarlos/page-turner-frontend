import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function PlaceForm() {
  const [city, setCity]=useState("");
  const navigate = useNavigate();

  const handleChange = e => {
    setCity(e.target.value)
  }

    const handleSubmit = e => {
      e.preventDefault();
      const headers = {
        "Accept": 'application/json',
        "Content-Type": "application/json"
      }
      const body = {city: city }
      const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      }
      fetch("http://localhost:9292/places", options)
        .then(r => r.json())
        .then(data => {
          navigate('/places')
        })
    }

  return (
    <div>
      <br/>
      <h1>Add a New City to the List</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city" >City:</label>
          <input type="text" id="city" value={city} onChange={handleChange} autoFocus= {true}/>
        </div>
        <br/>
        <input type="submit" value="Add City"></input>
      </form>
    </div>
  )
}

export default PlaceForm