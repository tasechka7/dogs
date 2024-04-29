import axios from "axios"
import { useState, useEffect } from "react"
import Dog from "./Dog"
import Header from "./Header"


export default function Dogs() {
    const [dogs, setDogs] = useState(null)
    const apiUrl = "https://6617ee549a41b1b3dfbbb9c1.mockapi.io/dogs/api/1"

    useEffect(() => {
        axios.get(apiUrl)
        .then(res => {
            setDogs(res.data)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div>
       <Header />
       <div className="dogs d-flex flex-wrap gap-4 p-3 justify-content-center">
         {
            dogs &&
            dogs.map((dog, idx) => (
                <Dog key={idx} dog={dog} />
            ))
         }
       </div>
       </div>
    )
}