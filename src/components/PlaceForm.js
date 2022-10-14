import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function PlaceForm() {
  const [city, setCity]=useState("");
  const navigate = useNavigate();

//   const handleChange = (e) => {
//     setValues({
//         ...values, [e.target.name]: e.target.value
//     })
// }

  const handleChange = e => {
    setCity(e.target.value)
  }
//   useEffect(() => {
//     fetch('http://localhost:9292/places')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             setPlaces(data)
//         })
// }, [])
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
      .then(r =>r.json())
      .then(data => {
        console.log(data)
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