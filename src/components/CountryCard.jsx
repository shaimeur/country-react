/* eslint-disable react/prop-types */
const CountryCard = ({dataCountry}) =>{
    return(
        <div className="flex flex-col justify-center content-center h-full rounded-b-lg">
                <img src={dataCountry.flags.png} alt="" />
                <h1>{dataCountry.name.common}</h1>
                <h3>Population : {dataCountry.population}</h3>
                <h4>Regions : {dataCountry.region}</h4>
                <h2>Capitale : {dataCountry.capital}</h2>
        </div>
    )
}

export default CountryCard