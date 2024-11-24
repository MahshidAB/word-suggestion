import { useEffect, useState } from "react";
import Input from "./Input"

function App() {
   const [cities, setCities] = useState([])
   const [suggestCity, setSuggestCity] = useState([])

   useEffect(() => {
      fetch("/cities.json")
         .then(res => res.json())
         .then(data => setCities(data))
   }, [])

   const handleChange = (value) => {
      if (value) {
         const newCities = cities.filter(item => item.startsWith(value))
         setSuggestCity(newCities)
      } else {
         setSuggestCity([])
      }
   }

   return <div>
      <Input handleChange={handleChange} hint={suggestCity[0]} />
   </div>
}

export default App;
