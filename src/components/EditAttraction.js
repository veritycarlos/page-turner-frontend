import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditAttraction() {
  const [name, setName]=useState("");
  const [ atr, setAtr] = useState("");
  const {id}=useParams();
  const navigate = useNavigate();

  const handleChange = e => {
    setName(e.target.value)
  }

    useEffect(() => {
        fetch(`http://localhost:9292/attractions/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAtr(data)
            setName(data.name)
        })
    }, [])

    const handleSubmit = e => {
      e.preventDefault();
      const headers = {
        "Accept": 'application/json',
        "Content-Type": "application/json"
      }
      const body = {name: name }
      const options = {
        method: 'PATCH',
        headers: headers,
        body: JSON.stringify(body)
      }
      fetch(`http://localhost:9292/attractions/${id}`, options)
        .then(r => r.json())
        .then(data => {
          navigate(`/attractions/${id}`)
        })
    }

  return (
    <div>
      <br/>
      <h1>Edit {atr.name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="atrname" >Attraction:</label>
          <input type="text" id="atrname" value={name} onChange={handleChange} autoFocus= {true}/>
        </div>
        <br/>
        <input type="submit" value="Update Attraction"></input>
      </form>
    </div>
  )
}

export default EditAttraction