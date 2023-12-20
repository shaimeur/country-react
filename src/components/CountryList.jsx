/* eslint-disable react/prop-types */
import CountryCard from "./CountryCard"
const CountryList = ({dataCountrys}) =>{



    return (
        <div className="flex justify-center content-center flex-wrap h-full gap-4 m-16">
            {dataCountrys.map((dataCountry,index)=>(
                <CountryCard key={index} dataCountry={dataCountry}/>
            ))}
        </div>
    )
}

export default CountryList