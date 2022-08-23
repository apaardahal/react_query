import React from 'react'

export const CardCharacter = ({character}) => {
  return (
    <div className='card'>
        <img src={character.image} alt=""/>
        <h3>{character.name}</h3>
        <p className='status'>
            {character.status} - {character.species}
        </p>
        <p className='title'>Last seen on</p>
        <p>{character.location.name}</p>
    </div>
  )
}
