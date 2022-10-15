import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const NewAttraction = () => {
    const [place, setPlace] = useState("");
    const [state, setState] = useState({
        name: "",
        season: ""
    })
    const {placeId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:9292/places/${placeId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPlace(data)
        })
    }, [])

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const headers = {
            "Accept": 'application/json',
            "Content-Type": "application/json"
        }
        const body = { name: state.name, season: state.season }
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        }
        fetch(`http://localhost:9292/places/${placeId}/attractions`, options)
        .then(r => r.json())
        .then(data => {
            console.log(data)
            navigate(`/places/${placeId}`);
        })
    }

  return (
    <div>
        <h3>Add Attraction for { place.city } </h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" value={ state.name } onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="season">Season: </label>
                <input type="text" name="season" value={state.season} onChange={handleChange}/>
            </div>
            <br/>
            <input type="submit" value="Add new event" />
        </form>

    </div>
  )
}

export default NewAttraction