import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'


const query_countries = gql`
{
  countries{
    name
    capital
    emoji
    code
  }
}
`
export const Home = () => {
  const { data, loading, error } = useQuery(query_countries)
  return (
    <div className="home">
      <div className="title">
        <h1>List of countries</h1>
        <Link to="/search" className="link">Search for Country</Link>
      </div>
      <div className="listOfCountries">
        {loading && <h3>Data is loading...</h3>}
        {error && <h3>{error.message}</h3>}
        {data && data.countries.map((country, key) => (
          <div key={key} className="country">
            <h2>{country.name} <label>{country.emoji}</label>  </h2>
            <h4>{country.capital} | {country.code}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
