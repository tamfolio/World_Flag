import React from 'react'
import './FlagComponent.css'

function FlagComponent({name, population, region, capital,flag}) {
    return (
            <div className='flag-components'>
              <img src={flag} alt="" />
              <div className="flag-details">
              <h2>{name}</h2>
              <p><span>Capital:</span> {capital}</p>
              <p><span>Population:</span> {population}</p>
              <p><span>Region:</span> {region}</p>
            </div>
            </div>
    )
}

export default FlagComponent
