import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// function EditPlace() {
//   const [city, setCity]=useState("");
//   const [ place, setPlace ] = useState("");
//   const {id}=useParams();
//   const navigate = useNavigate();

function EditAttraction() {
  const [name, setName]=useState("");
  const [ atr, setAtr] = useState("");
  const {id}=useParams();
  const navigate = useNavigate();

//   const handleChange = e => {
//     setCity(e.target.value)
//   }

//     useEffect(() => {
//         fetch(`http://localhost:9292/places/${id}`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             setPlace(data)
//             setCity(data.city)
//         })
//     }, [])

//     const handleSubmit = e => {
//       e.preventDefault();
//       const headers = {
//         "Accept": 'application/json',
//         "Content-Type": "application/json"
//       }
//       const body = {city: city }
//       const options = {
//         method: 'PATCH',
//         headers: headers,
//         body: JSON.stringify(body)
//       }
//       fetch(`http://localhost:9292/places/${id}`, options)
//         .then(r => r.json())
//         .then(data => {
//           navigate(`/places/${id}`)
//         })
//     }

//   return (
//     <div>
//       <br/>
//       <h1>Edit {place.city}</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="city" >City:</label>
//           <input type="text" id="city" value={city} onChange={handleChange} autoFocus= {true}/>
//         </div>
//         <br/>
//         <input type="submit" value="Update City"></input>
//       </form>
//     </div>
//   )
// }

// export default EditPlace