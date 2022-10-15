import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const NewAttraction = () => {
    const [place, setPlace] = useState({
        attraction:[]
    });
    const [state, setState] = useState({
        name: "",
        season: ""
    })
    const {placeId} = useParams();
    // const [attraction, setAttraction] = useState({
    //     place:[]
    // })
    useEffect(() => {
        fetch(`http://localhost:9292/places/${placeId}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPlace(data)
        })
    }, [])

    const handleChange = e => {
        
    }

  return (
    <div>
        <h3>Add Attraction for { place.city } </h3>
        <form>
            <div>
                <label>Name: </label>
                <input type="text" />
            </div>
            <div>
                <label>Season: </label>
                <input type="text" />
            </div>
            <br/>
            <input type="submit" value="Add new event" />
        </form>

    </div>
  )
}

export default NewAttraction