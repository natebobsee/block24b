import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

let id;
let featPupID;
let featuredPup=[];
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
     setFeatPupId(id)
    console.log(id)
    featPupID=id;
    featuredPup = puppies.find((pup)=> pup.id === featPupId)
    // some logic here
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={handleClick} key={puppy.id}>
            {puppy.name}
            {id=puppy.id}
            
            {/* {console.log("puppy id: ", puppy.id)} */}
          </p>
          
        );

      })}
          {featPupId && (
        <div>
          {/* <h2>{featuredPup.name}</h2> */}
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
