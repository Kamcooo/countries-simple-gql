import React, { useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'

const query_country = gql`
query Country($code:ID!){
  country(code:$code){
    name
    code
    emoji
    capital
    currency
  }
}
`

export const Search = () => {
  const [searchCode, setSearchCode] = useState('')
  const [searchCountry, { data, loading, error }] = useLazyQuery(query_country)


  return (
    <div className="search">
      <div className="title">
        <Link to="/" className="link">List of countries</Link>
        <div className="search-input">
          <input type="text"
            placeholder="Enter country code..."
            onChange={(e) => setSearchCode(e.target.value)} />
          <button onClick={() => {
            searchCountry({
              variables: { code: searchCode.toUpperCase() }
            })
          }}>Search Country</button>
        </div>
      </div>
      <div className="searchData">
        {loading && <h3>Data is loading...</h3>}
        {error && <h3>{error.message}</h3>}
        {data && data.country &&
          <div className="search-country">
            <h1>{data.country.name} {data.country.emoji}</h1>
            <h1>Capital: {data.country.capital}</h1>
            <h1>Currency: {data.country.currency}</h1>
            <h1>Country code: {data.country.code}</h1>
          </div>}
      </div>
    </div>
  )
}
