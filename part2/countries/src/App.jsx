import { useState, useEffect } from 'react'
import Countries from './components/Countries'
import Country from './components/Country'
import countryService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(allCountries => {
        setCountries(allCountries)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
    setSelected(null)
  }

  const countriesToShow = filter === ''
    ? []
    : countries.filter(country =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      )

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange}/>
      </div>
      {selected
        ? <Country country={selected}/>
        : <Countries countries={countriesToShow} showCountry={setSelected}/>
      }
    </div>
  )
}

export default App
