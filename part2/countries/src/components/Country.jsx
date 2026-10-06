import Weather from './Weather'

const Country = ({ country }) => {
  const capital = country.capital ? country.capital[0] : null

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital {capital ? capital : 'none'}</div>
      <div>area {country.area}</div>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages || {}).map(language =>
          <li key={language}>{language}</li>
        )}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} width="200"/>
      {capital && country.capitalInfo.latlng &&
        <Weather capital={capital} latlng={country.capitalInfo.latlng}/>
      }
    </div>
  )
}

export default Country
