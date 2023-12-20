import { useState,useEffect } from "react"
import CountryList from './components/CountryList'
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import './App.css'

function App() {
  const [countryData,setCountryData] = useState([]);


  const url = `https://restcountries.com/v3.1/all`


  const fetchCountryData = async () =>{

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setCountryData(data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(()=>{
          fetchCountryData()
  },[])

  return (
    <div className="App">
        <Header/>
        <SearchInput/>
        <CountryList dataCountrys={countryData}/>
    </div>
  )
}

export default App
